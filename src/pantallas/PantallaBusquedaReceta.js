import React, { useState, useContext } from 'react';
import { View, TextInput, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { searchRecipes } from '../api/spoonacular';
import { MenuContext } from '../context/MenuProvider';
import RecipeCard from '../components/RecipeCard';
import { useNavigation } from '@react-navigation/native';

const RecipeSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const { selectedRecipes, addRecipe, removeRecipe } = useContext(MenuContext);
  const navigation = useNavigation();

  const onSearch = async () => {
    if (searchQuery.length > 2) {
      const results = await searchRecipes(searchQuery);
      setRecipes(results);
    }
  };

  const navigateToDetails = (recipe) => {
    navigation.navigate('Detail', { recipe });
  };

  // Función para confirmar la eliminación de una receta
  const confirmRemoveRecipe = (recipe) => {
    Alert.alert(
      "Eliminar receta",
      `¿Estás seguro de que deseas eliminar ${recipe.title} del menú?`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", onPress: () => removeRecipe(recipe) }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar recetas..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={onSearch}
      />
      <Button title="Buscar" onPress={onSearch} />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isInMenu = selectedRecipes.some((r) => r.id === item.id);

          return (
            <RecipeCard
              recipe={item}
              onDetailsPress={() => navigateToDetails(item)}
              onToggleMenu={() => {
                if (isInMenu) {
                  confirmRemoveRecipe(item); // Confirmación de eliminación
                } else {
                  addRecipe(item); // Agregar sin límite en RecipeSearchScreen
                }
              }}
              includedInMenu={isInMenu}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 5, marginBottom: 10 },
});

export default RecipeSearchScreen;

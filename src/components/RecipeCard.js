import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const RecipeCard = ({ recipe, onDetailsPress, onToggleMenu, includedInMenu }) => {
  const type = recipe.vegan ? 'V' : 'N-V';

  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {type} {recipe.title}
        </Text>
        <Button title="Ver Detalles" onPress={() => onDetailsPress(recipe)} />
        <Button
          title={includedInMenu ? 'Quitar del menú' : 'Agregar al menú'}
          onPress={() => onToggleMenu(recipe)}
        />
      </View>
      <Image source={{ uri: recipe.image }} style={styles.thumbnail} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',        // Coloca los elementos en línea horizontal
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between', // Asegura que el contenido esté espaciado
  },
  infoContainer: {
    flex: 1,
    paddingRight: 10,            // Añade espacio entre el texto y la imagen
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  thumbnail: {
    width: 60,                   // Ajusta el ancho de la imagen según sea necesario
    height: 60,
    borderRadius: 8,
  },
});

export default RecipeCard;

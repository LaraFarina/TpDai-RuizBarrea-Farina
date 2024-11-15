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
    flexDirection: 'row',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#ffffff', // Un color blanco para destacar el contenido
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Agrega una ligera sombra para realce
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para dispositivos Android
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    marginRight: 12, // Espacio más amplio entre texto e imagen
  },
  title: {
    fontSize: 18, // Tamaño de fuente más grande para mejor lectura
    fontWeight: 'bold',
    color: '#333', // Color oscuro para buen contraste
    marginBottom: 8,
  },
  thumbnail: {
    width: 70, // Tamaño más destacado para la miniatura
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd', // Borde para un look más refinado
  },
  button: {
    marginTop: 6, // Espaciado entre botones
  },
});


export default RecipeCard;

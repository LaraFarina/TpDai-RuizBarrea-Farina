import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from '../pantallas/PantallaMenu';
import BusquedaReceta from '../pantallas/PantallaBusquedaReceta';
import DetalleReceta from '../pantallas/PantallaDetalleReceta';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menú' }} />
      <Stack.Screen name="Buscar" component={BusquedaReceta} options={{ title: 'Buscar Recetas' }} />
      <Stack.Screen name="Detalle" component={DetalleReceta} options={{ title: 'Detalles de la Receta' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;

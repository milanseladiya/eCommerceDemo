import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Pages} from './Routes';
/**
 * Screens
 */
import MainScreen from '../screens/MainScreen';
import ProductListingScreen from '../screens/ProductListingScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Pages.MainScreen} component={MainScreen} />
        <Stack.Screen
          name={Pages.ProductListingScreen}
          component={ProductListingScreen}
        />
        <Stack.Screen
          name={Pages.ProductDetailsScreen}
          component={ProductDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

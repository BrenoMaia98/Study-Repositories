import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import PokemonDetails from '../screens/PokemonDetails';
import Screen2 from '../screens/Screen2';

export type RootStackParamList = {
  HomeScreen: {
    Screen2: {id: number};
  };
  Screen2: undefined;
  PokemonDetails: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="PokemonDetails" component={PokemonDetails} />
        <RootStack.Screen name="Screen2" component={Screen2} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

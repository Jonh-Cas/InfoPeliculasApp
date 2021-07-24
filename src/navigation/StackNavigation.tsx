import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/stackScreens/HomeScreen';
import DetailsScreen from '../screens/stackScreens/DetailsScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator  
     screenOptions={{
         headerShown: false,

    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

    </Stack.Navigator>
  );
}
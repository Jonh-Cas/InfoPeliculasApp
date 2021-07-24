import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import FadeScreen from './src/screens/FadeScreen';
import { GrandeintProvider } from './src/context/GradientContext';

const AppState = ({children}: any) => {
  return (
  <GrandeintProvider>
    {children}
  </GrandeintProvider>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigation />
      </AppState>
     {/* <FadeScreen /> */}
    </NavigationContainer>
  )
}

export default App;

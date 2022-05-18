import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './app/screens/HomeScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Navigator from "./app/routes/homeStack";

function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
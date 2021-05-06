import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Components/Navigation'
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar backgroundColor="black" />
    </NavigationContainer>
  );
}
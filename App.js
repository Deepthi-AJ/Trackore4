import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen'
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  LogInScreen :{screen:LogInScreen},
  SignUpScreen :{screen:SignUpScreen}
  })

const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * Assignment 4
 * https://github.com/bozalp
 *
 */

import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/Pages/Home";
import Search from "./src/Pages/Search";
import SettingsScreen from "./src/Pages/Settings/SettingsScreen";
import SplashScreen from "./src/Pages/SplashScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} options={{
              headerShown: false
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

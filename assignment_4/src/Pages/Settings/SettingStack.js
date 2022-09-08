import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import SettingsScreen from './SettingsScreen';
import EditProfile from './EditProfile';
import Theme from './Themes';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const MainPage = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            <Stack.Screen name="Theme" component={Theme} />
            <Stack.Screen name="EditProfile" component={EditProfile} />

        </Stack.Navigator>
    );
}

const styles = StyleSheet.create(
    {

    }
);
export default MainPage;

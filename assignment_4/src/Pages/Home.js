import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from './Movies';
import Search from './Search';
import SettingStack from './Settings/SettingStack';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Movies" component={Movies} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="SettingStack" component={SettingStack}
                options={{
                    title: "Settings",
                    tabBarLabel: 'Settings',
                }} />
        </Tab.Navigator>
    );
}

export default Home;

import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from './Movies';
import Search from './Search';
import SettingStack from './Settings/SettingStack';
import NewIcon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { setDark, setLight } from '../Toolkits/themeSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {

    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    const getTheme = async () => {
        const value = await AsyncStorage.getItem('theme');
        value === 'light' || value === null ? dispatch(setDark()) : dispatch(setLight());
    };

    useEffect(() => {
        getTheme();
    }, []);

    return (
        <Tab.Navigator>
            <Tab.Screen name="Movies" component={Movies} options={{
                tabBarIcon: ({ color }) => (
                    <NewIcon name='film-outline' size={24} color={color} />
                )
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ color }) => (
                    <NewIcon name='search' size={24} color={color} />
                )
            }} />
            <Tab.Screen name="SettingStack" component={SettingStack}
                options={{
                    title: "Settings",
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <NewIcon name='settings-outline' size={24} color={color} />
                    )
                }} />
        </Tab.Navigator>
    );
}

export default Home;

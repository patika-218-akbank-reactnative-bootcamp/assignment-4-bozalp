import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';


//import AsyncStorage from '@react-native-async-storage/async-storage';

const Theme = ({ navigation }) => {


    /*const { theme, setTheme } = useContext(ThemeContext);
    function changeTheme() {        
        theme.title === 'light' ? setTheme(darkTheme) : setTheme(lightTheme);
        setThemeStorage();
    }*/

    /* const setThemeStorage = async () => {
         await AsyncStorage.setItem('theme', theme === lightTheme ? 'dark' : 'light');
     };*/

    return (
        <View>
            <Text style={[styles.header, { color: 'black' }]}>Theme Setting</Text>
            <Image
                source={require('../../images/darkMode.png')}
                style={styles.button_image} />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            padding: 10,
        },
        button:
        {
            paddingTop: 40,
            alignItems: 'center'
        },
        button_image:
        {
            width: 64,
            height: 64,
        },
        header:
        {
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
        }
    }
);
export default Theme;

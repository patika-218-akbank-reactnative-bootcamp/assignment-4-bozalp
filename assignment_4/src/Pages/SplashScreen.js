import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home");
        }, 1000);
    }, []);


    return (
        <View>
            <Text>
                Best Movie App
            </Text>
        </View>
    );
}

export default SplashScreen;

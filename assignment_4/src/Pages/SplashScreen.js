import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NewIcon from 'react-native-vector-icons/Ionicons';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home");
        }, 1000);
    }, []);


    return (
        <View style={styles.container}>
            <NewIcon name='videocam-outline' size={72} color={"black"} />
            <Text style={styles.title}>
                Best Movie App
            </Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        title:
        {
            fontSize: 24,
            fontWeight: 'bold',
            color:'black',
            letterSpacing:3
        }
    }
)
export default SplashScreen;

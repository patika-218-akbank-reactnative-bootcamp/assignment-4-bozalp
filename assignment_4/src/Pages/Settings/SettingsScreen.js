import React from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import Buttons from '../../Components/Buttons';
import { useSelector } from 'react-redux';

const SettingsScreen = ({ navigation }) => {
    const theme = useSelector((state) => state.theme.theme);

    function goToTheme() {
        navigation.navigate("Theme");
    }
    function goToEditPage() {
        navigation.navigate("EditProfile");
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Buttons title={"Theme"} onPress={goToTheme} />
            <Buttons title={"Edit Profile"} onPress={goToEditPage} />
            <Buttons title={"Logout"} />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            alignItems: 'center',
        }
    }
)

export default SettingsScreen;

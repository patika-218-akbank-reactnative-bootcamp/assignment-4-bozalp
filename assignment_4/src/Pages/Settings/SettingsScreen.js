import React from 'react';
import { Alert, Text, View } from 'react-native';
import Buttons from '../../Components/Buttons';

const SettingsScreen = ({ navigation }) => {

    function goToTheme() {
        navigation.navigate("Theme");
    }
    function goToEditPage() {
        navigation.navigate("EditProfile");
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Buttons title={"Theme"} onPress={goToTheme} />
            <Buttons title={"Edit Profile"} onPress={goToEditPage} />
            <Buttons title={"Logout"} />
        </View>
    );
};

export default SettingsScreen;

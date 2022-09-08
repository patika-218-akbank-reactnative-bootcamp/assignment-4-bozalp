import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

const EditProfile = ({ navigation }) => {
    return (
        <View>
            <Text>
                Edit
            </Text>
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
        header:
        {
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        button:
        {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 20,
            height: 50,
            width: '80%',
            justifyContent: 'center',
            alignSelf: 'center'
        },
        phone_number_area:
        {
            flexDirection: 'row',
        },
    }
);
export default EditProfile;

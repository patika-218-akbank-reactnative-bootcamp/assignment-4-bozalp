import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Buttons = ({ title, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}
            // style={[styles.buttons, { borderWidth: 1, borderColor: theme.color }]}>
            style={styles.buttons} >
            <Text style={{ color: 'black' }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create(
    {
        buttons:
        {
            width: '80%',
            height: 64,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            borderColor:'black',
            borderWidth:1,
        },
    }
);

export default Buttons;

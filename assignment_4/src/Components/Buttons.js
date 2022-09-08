import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const Buttons = ({ title, onPress }) => {
    const theme = useSelector((state) => state.theme.theme);
    
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}
             style={[styles.buttons, { borderWidth: 1, borderColor: theme.color }]}>
            <Text style={{ color: theme.color }}>
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

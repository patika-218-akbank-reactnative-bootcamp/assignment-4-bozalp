import React, { useContext } from 'react';
import { Text, View, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

const TextBox = ({ title, value, onChangeText, numeric }) => {
    const theme = useSelector((state) => state.theme.theme);
    
    return (
        <TextInput
            style={{
                backgroundColor: theme.grayBackground, color: theme.color,
                borderRadius: 5, borderColor: theme.color, borderWidth: 1
            }}
            onChangeText={onChangeText}
            value={value}
            placeholder={title}
            placeholderTextColor={theme.color}
            keyboardType={numeric ? "numeric" : null}
        />
    );
}

export default TextBox;

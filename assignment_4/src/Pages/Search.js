import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Search = () => {
    const theme = useSelector((state) => state.theme.theme);

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text>
                Search
            </Text>
        </View>
    );
};
const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            padding: 10,
        },

    }
)
export default Search;

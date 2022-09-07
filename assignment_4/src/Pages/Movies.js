import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Movies = () => {
    return (
        <View style={styles.container}>
            <Text>
                Movies
            </Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
        }
    }
)

export default Movies;

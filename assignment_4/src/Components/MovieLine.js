import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const MovieLine = ({ movies }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'http://image.tmdb.org/t/p/w500/' + movies.poster_path }} style={styles.image} />
            <View style={styles.text_area}>
                <Text style={styles.title}>
                    {movies.title}
                </Text>
                <Text>
                    {movies.vote_average}/10
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container:
        {
            width: '100%',
            flexDirection: 'row',
            marginBottom: 10
        },
        image:
        {
            width: 100,
            height: 100,
            borderRadius: 10,
            resizeMode: 'contain',
            marginRight: 10,
        },
        text_area:
        {
            flex: 1,
            justifyContent: 'space-between'
        },
        title:
        {
            fontSize: 16,
            fontWeight: 'bold',
        },
    }
)

export default MovieLine;

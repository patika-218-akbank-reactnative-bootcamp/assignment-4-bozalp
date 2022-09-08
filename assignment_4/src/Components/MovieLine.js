import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useSelector } from 'react-redux';

const MovieLine = ({ navigation, movies }) => {
    const theme = useSelector((state) => state.theme.theme);

    //Tikladigim filmin id verisini detail sayfasina yolluyorum.
    function goToMovieDetails() {
        navigation.navigate("MovieDetails", movies.id);
    }

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => goToMovieDetails()}>
            <View style={styles.container}>
                <Image source={{ uri: 'http://image.tmdb.org/t/p/w500/' + movies.poster_path }} style={styles.image} />
                <View style={styles.text_area}>
                    <Text style={[styles.title, { color: theme.color }]}>
                        {movies.title}
                    </Text>
                    <Text style={{ color: theme.color }}>
                        {movies.vote_average}/10
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
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

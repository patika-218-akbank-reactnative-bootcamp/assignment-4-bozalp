import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';

const MovieDetails = ({ route }) => {
    const theme = useSelector((state) => state.theme.theme);

    //MovieLine kisminda tikladigimiz filmin id verisini degiskene atip fetch data ile cekiyorum.
    const movieId = route.params;

    const [selectedMovie, setSelectedMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            const response = await axios
                .get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=1708682720c29ece63d8f2978de76728');
            setLoading(false);
            setSelectedMovie(response.data);
        }
        catch (error) {
            console.log(error.toString());
        }
    }

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            {
                loading ? <ActivityIndicator size={"large"} /> :
                    <ScrollView >
                        <Image source={{ uri: 'http://image.tmdb.org/t/p/w500/' + selectedMovie.poster_path }} style={styles.image} />
                        <Text style={[styles.title, { color: theme.color }]}>
                            {selectedMovie.title}
                        </Text>
                        <Text style={{ color: theme.color }}>
                            {selectedMovie.overview}
                        </Text>

                        <View>
                            <Text style={[styles.vote_text, { color: theme.color }]}>
                                Popularity {selectedMovie.popularity}
                            </Text>
                            <Text style={[styles.vote_text, { color: theme.color }]}>
                                Vote Avarage {selectedMovie.vote_average}
                            </Text>
                        </View>
                    </ScrollView>
            }

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
        image:
        {
            width: 200,
            height: 200,
            borderRadius: 10,
            resizeMode: 'contain',
            marginRight: 10,
            alignSelf: 'center'
        },
        vote_text:
        {
            paddingTop: 10,
            fontWeight: '800',
        },
        title:
        {
            fontWeight: 'bold',
            fontSize: 18,
            paddingTop:10,
            paddingBottom:5
        }
    }
)

export default MovieDetails;

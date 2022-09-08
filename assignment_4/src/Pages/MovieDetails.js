import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import axios from 'axios';

const MovieDetails = ({ route }) => {

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
        <View style={styles.container}>
            {
                loading ? <ActivityIndicator size={"large"} /> :
                    <ScrollView >
                        <Image source={{ uri: 'http://image.tmdb.org/t/p/w500/' + selectedMovie.poster_path }} style={styles.image} />
                        <Text style={styles.title}>
                            {selectedMovie.title}
                        </Text>
                        <Text>
                            {selectedMovie.overview}
                        </Text>

                        <View>
                            <Text style={styles.vote_text}>
                                Popularity {selectedMovie.popularity}
                            </Text>
                            <Text style={styles.vote_text}>
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
        stars:
        {
            width: 100,
            height: 25,
            backgroundColor: 'gray',
            marginLeft: 10,
            marginRight: 10,
            justifyContent: 'center'
        },
        stars_bg:
        {
            height: 25,
            backgroundColor: '#21d07a',
        },
        title:
        {
            fontWeight: 'bold',
            fontSize: 18,
        }
    }
)

export default MovieDetails;

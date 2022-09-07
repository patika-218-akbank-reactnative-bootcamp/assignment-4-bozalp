import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, Alert } from 'react-native';
import axios from 'axios';

const MovieDetails = ({ route }) => {

    const movieId = route.params;

    const [selectedMovie, setSelectedMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            const response = await axios
                .get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=1708682720c29ece63d8f2978de76728');
            setLoading(false);
            setSelectedMovie(response.data);
            //setVote(selectedMovie.vote_average * 10);
        }
        catch (error) {
            console.log(error.toString());
        }
    }

    useEffect(() => {
        fetchData();
        //Alert.alert(selectedMovie.vote_average);
    }, []);



    return (
        <View style={styles.container}>
            {
                loading ? <ActivityIndicator size={"large"} /> :
                    <View >
                        <Image source={{ uri: 'http://image.tmdb.org/t/p/w500/' + selectedMovie.poster_path }} style={styles.image} />
                        <Text style={styles.title}>
                            {selectedMovie.title}
                        </Text>
                        <Text>
                            {selectedMovie.overview}
                        </Text>

                        <View style={styles.vote_area}>
                            <Text>
                                Vote Avarage
                            </Text>
                            <View style={styles.stars} >
                                <View
                                    style={[styles.stars_bg, { width: selectedMovie.vote_average * 10 }]}
                                />
                            </View>
                            <Text>
                                {selectedMovie.vote_average * 10}%
                            </Text>
                        </View>
                    </View>
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
            width: 100,
            height: 100,
            borderRadius: 10,
            resizeMode: 'contain',
            marginRight: 10,
        },
        vote_area:
        {
            flexDirection: 'row',
            padding: 10,
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

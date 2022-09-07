import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import MovieLine from '../Components/MovieLine';

const TopRatedURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=1708682720c29ece63d8f2978de76728';
const Movies = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            const response = await axios.get(TopRatedURL);
            setLoading(false);
            //console.log(response.data.results[0].title);
            //console.log(typeof response.data.results);
            setMoviesList(response.data.results);
        }
        catch (error) {
            console.log(error.toString());
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const renderMovies = ({ item }) => <MovieLine movies={item} />

    return (
        <View style={styles.container}>
            {
                loading ? <ActivityIndicator size={"large"} />
                    :
                    <FlatList
                        data={moviesList}
                        renderItem={renderMovies}
                    />
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
        }
    }
)

export default Movies;

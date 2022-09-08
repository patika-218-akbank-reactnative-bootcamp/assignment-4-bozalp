import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, ActivityIndicator, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import TextBox from '../Components/TextBox';
import Buttons from '../Components/Buttons';
import axios from 'axios';
import MovieLine from '../Components/MovieLine';

const Search = ({ navigation }) => {
    const theme = useSelector((state) => state.theme.theme);
    const [searchedMovie, setMovie] = useState(null);

    const [searchedMoviesList, setMoviesList] = useState([]);
    const [loading, setLoading] = useState(true);
    //sekmeler icin json olusturdum. default olarak json'un ilk degerini atadim.

    async function fetchsearchMovieData() {
        try {
            const response = await axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=1708682720c29ece63d8f2978de76728&query=' + searchedMovie);
            setLoading(false);
            //console.log(response.data.results[0].title);
            //console.log(typeof response.data.results);
            setMoviesList(response.data.results);
        }
        catch (error) {
            console.log(error.toString());
        }
    }
    const renderMovies = ({ item }) => <MovieLine navigation={navigation} movies={item} />

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View>
                <FlatList
                    ListHeaderComponent={
                        <View style={styles.header_container}>
                            <View style={styles.textbox}>
                                <TextBox title={"Movie Name"} value={searchedMovie} onChangeText={setMovie} />
                            </View>
                            <View style={styles.button}>
                                <Buttons title={"Search"} onPress={() => { fetchsearchMovieData() }} />
                            </View>
                        </View>
                    }
                    data={searchedMoviesList}
                    renderItem={renderMovies} />
            </View>
        </View >
    );
};
const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            padding: 10,
        },
        header_container:
        {
            flexDirection: 'row',
            alignItems: 'center'
        },
        button:
        {
            flex: 1,
            alignItems: 'center',
            paddingBottom: 20
        },
        textbox:
        {
            flex: 3,
        }
    }
)
export default Search;

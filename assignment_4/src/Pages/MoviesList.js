import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import MovieLine from '../Components/MovieLine';
import MovieTabs from '../Components/movieTabs.json';
import { useSelector } from 'react-redux';

const MoviesList = ({ navigation }) => {
    const theme = useSelector((state) => state.theme.theme);

    const [moviesList, setMoviesList] = useState([]);
    const [loading, setLoading] = useState(true);
    //sekmeler icin json olusturdum. default olarak json'un ilk degerini atadim.
    const [selectedTab, setSelectedTab] = useState(MovieTabs[0].optionLink);

    async function fetchData() {
        try {
            const response = await axios
                .get('https://api.themoviedb.org/3/movie/' + selectedTab + '?api_key=1708682720c29ece63d8f2978de76728');
            setLoading(false);
            //console.log(response.data.results[0].title);
            //console.log(typeof response.data.results);
            setMoviesList(response.data.results);
        }
        catch (error) {
            console.log(error.toString());
        }
    }
    //ilk acildiginda selectedTab guncelleniyor. Ya da selectedTab degistiginde baska bir fetch islemi yapiyorum.
    useEffect(() => {
        fetchData();
    }, [selectedTab]);

    //secilen sekmenin ismini aliyorum. fetchData kismindaki selectedTab degerine gore guncelliyorum.
    function selectTab(optionName) {
        const selected = MovieTabs.filter(tabName => tabName.optionName === optionName);
        setSelectedTab(selected[0].optionLink);
    }

    const renderMovies = ({ item }) => <MovieLine navigation={navigation} movies={item} />

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            {
                loading ? <ActivityIndicator size={"large"} />
                    :
                    <FlatList
                        ListHeaderComponent={

                            <View style={styles.container_header}>
                                <FlatList horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    data={MovieTabs}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity style={[{ borderRadius: 15, borderWidth: 1, },
                                        selectedTab === item.optionLink ?
                                            [styles.selected_button, { borderColor: theme.color }] :
                                            [styles.buttons, { borderColor: theme.color }]]}
                                            activeOpacity={0.7} onPress={() => selectTab(item.optionName)}>
                                            <Text style={[styles.title, { color: theme.color }]}>
                                                {item.optionName}
                                            </Text>
                                        </TouchableOpacity>
                                    } />
                            </View>


                        }
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
        },
        container_header:
        {
            height: 50,
            marginBottom: 10,
        },
        buttons:
        {
            width: 100,
            height: 40,
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        selected_button:
        {
            width: 100,
            height: 40,
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'gray'
        }
    }
)

export default MoviesList;

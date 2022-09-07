import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';
import MovieLine from '../Components/MovieLine';

const Movies = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MoviesList" component={MoviesList} options={{
              headerShown: false
            }}/>
            <Stack.Screen name="MovieDetails" component={MovieDetails} options={{
              headerShown: false
            }}/>
             <Stack.Screen name="MovieLine" component={MovieLine} options={{
              headerShown: false
            }}/>
        </Stack.Navigator>
    );
};

export default Movies;

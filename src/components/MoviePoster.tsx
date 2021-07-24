import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

const MoviePoster = ({ movie, height = 450, width = 290 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('DetailsScreen', movie)}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7,
            }} 
        >
          
            <View style={styles.imageContainer} >
                <Image source={{ uri }}
                    style={styles.image} />
            </View>
        
        </TouchableOpacity>
    )
}

export default MoviePoster;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },

    imageContainer: {
        flex:1,
        borderRadius: 18,
        overflow:'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        // backgroundColor: '#000',
        elevation: 9,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,

    }
})
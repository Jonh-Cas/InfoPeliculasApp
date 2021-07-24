import React from 'react'
import {
    View, Text, Image, StyleSheet,
    Dimensions, ActivityIndicator, TouchableOpacity
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
// import { Movie } from '../../interfaces/movieInterface';
import { RootStackParams } from '../../navigation/StackNavigation';
import { ScrollView } from 'react-native-gesture-handler';
import { useMovieDetails } from '../../Hooks/useMovieDetails';
import MovieDetails from '../../components/MovieDetails';


const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> { }

const DetailsScreen = ({ route, navigation }: Props) => {
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, movieFull, cast } = useMovieDetails(movie.id);



    return (
        <ScrollView>



            <View style={styles.imageContainer} >

                <View style={styles.imageBorder} >
                    <Image source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>

            </View>

            <View style={styles.marginContainer} >
                <Text style={styles.subTitle} > {movie.original_title} </Text>
                <Text style={styles.title} > {movie.title} </Text>
            </View>


            {
                isLoading
                    ? <ActivityIndicator size={35} color='grey' style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }
            <TouchableOpacity style={styles.backBoton}
                              onPress={() => navigation.pop() } >
                <Icon color='#FFF' name='arrow-back-outline'size={60}/>
            </TouchableOpacity>


        </ScrollView>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    posterImage: {
        flex: 1,
    },

    imageContainer: {
        // overflow: 'hidden',
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        // backgroundColor: '#000',
        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },

    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 18,
        opacity: 0.8,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    backBoton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5,
    }
});


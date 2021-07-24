import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import ImageColors from 'react-native-image-colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import GradientBackground from '../../components/GradientBackground';
import HorizontalSlider from '../../components/HorizontalSlider';
import MoviePoster from '../../components/MoviePoster';
import { GradientContext } from '../../context/GradientContext';
import { getColor } from '../../helpers/getColores';
import useMovies from '../../Hooks/useMovies'

const {width: windowWidth } = Dimensions.get('screen')


const HomeScreen = () => {

    const {nowPlaying, popular, topRated, upComing, isLoading }= useMovies();
    const {top} =  useSafeAreaInsets();
    const {setMainColors } = useContext(GradientContext)

    const getPosterColor = async ( index :number) => {
        const movie = nowPlaying[index]
        const uri =  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        
        const [primary = 'green', secondary = 'orange'] =await getColor(uri);

       setMainColors({ primary, secondary });


    }

    useEffect(() => {
        if(nowPlaying.length > 0){
            getPosterColor(0);
        }
    }, [nowPlaying])


     if(isLoading){
         return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'  }} >
                <ActivityIndicator color='indigo' size={ 100 } />
            </View>
         );
     }   

    

    return (
        <GradientBackground >

      
        <ScrollView>
            
        
        <View style={{marginTop: top + 20}}>
        <View style={{height: 440}} >
            <Carousel 
                data={ nowPlaying! }
                renderItem={({item}) => <MoviePoster movie={ item } /> }
                sliderWidth={windowWidth}
                itemWidth={300}
                inactiveSlideOpacity={0.9}
                onSnapToItem={ index => getPosterColor( index )  }
            />     
        </View> 

        {/* Peliculas Polurares */}
         <HorizontalSlider title='Popular' movies={popular! } />
         <HorizontalSlider title='Top Rated' movies={topRated! } />
         <HorizontalSlider title='Upcoming' movies={upComing! } />

        </View>
        </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen;

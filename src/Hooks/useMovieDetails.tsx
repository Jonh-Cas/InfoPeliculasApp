import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}


export const useMovieDetails = (movieID: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {

        const MovieDetailsPromise = await movieDB.get<MovieFull>(`/${movieID}`) ;
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieID}/credits`) ;

        const [movieDetailsResponse, castResponse ] =  await Promise.all([MovieDetailsPromise,castPromise]);
        setState({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castResponse.data.cast,
        });
    }

    useEffect(() => {
        getMovieDetails();
    }, [])


    return {
        ...state,
    };
}
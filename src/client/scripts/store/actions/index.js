import { FETCH_MOVIES, FETCH_TRAILER, FETCH_TRAILERS, SET_TRAILER } from './types';
import movieListService from '../../assets/services/movie-list/movie-list-service';
import trailerIdService from '../../assets/services/trailer/trailer-id-service';
import movieInfoService from '../../assets/services/trailer/movie-info-service';

export const fetchMovies = () => (dispatch) => {
    movieListService()
        .then((results) => {
            dispatch({
                type: FETCH_MOVIES,
                payload: results.movies
            });
        });
};

export const fetchTrailer = movieId => (dispatch) => {
    trailerIdService(movieId)
        .then((youtubeVideoId) => {
            dispatch({
                type: FETCH_TRAILER,
                payload: youtubeVideoId
            });
        });
};

export const fetchTrailers = movieId => (dispatch) => {
    movieInfoService(movieId)
        .then((movieInfo) => {
            dispatch({
                type: FETCH_TRAILERS,
                payload: movieInfo
            });
        });
};

export const setTrailer = youtubeVideoId => (dispatch) => {
    dispatch({
        type: SET_TRAILER,
        payload: youtubeVideoId
    });
};

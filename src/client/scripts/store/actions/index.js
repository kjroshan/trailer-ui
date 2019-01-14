import { FETCH_MOVIES, FETCH_TRAILER } from './types';
import movieListService from '../../assets/services/movie-list/movie-list-service';
import trailerService from '../../assets/services/trailer/trailer-service';


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
    trailerService(movieId)
        .then((youtubeVideoId) => {
            dispatch({
                type: FETCH_TRAILER,
                payload: youtubeVideoId
            });
        });
};

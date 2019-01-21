import assign from 'lodash/assign';
import { FETCH_MOVIES, FETCH_TRAILER, FETCH_TRAILERS, SET_TRAILER } from '../actions/types';
import getMovieInfo from './helpers/get-movie-info';

const initialState = {
    movies: [],
    youtubeVideoId: null,
    trailers: [],
    movieInfo: null
};

export default function (state = initialState, action) {
    switch (action.type) {
    case FETCH_MOVIES:
        return assign({}, state, { movies: action.payload });

    case SET_TRAILER:
        return assign({}, state, { youtubeVideoId: action.payload });

    case FETCH_TRAILER:
        return assign({}, state, { youtubeVideoId: action.payload });

    case FETCH_TRAILERS:
        return assign({}, state, getMovieInfo(action.payload));

    default:
        return state;
    }
}

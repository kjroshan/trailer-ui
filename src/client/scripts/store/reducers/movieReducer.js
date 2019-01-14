import assign from 'lodash/assign';
import { FETCH_MOVIES, FETCH_TRAILER } from '../actions/types';

const initialState = {
    movies: [],
    youtubeVideoId: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
    case FETCH_MOVIES:
        return assign({}, state, { movies: action.payload });

    case FETCH_TRAILER:
        return assign({}, state, { youtubeVideoId: action.payload });

    default:
        return state;
    }
}

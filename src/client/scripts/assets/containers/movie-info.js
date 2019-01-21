import React from 'react';
import PropTypes from 'prop-types';

import Votes from '../components/movie-info/votes';
import Subtitle from '../components/movie-info/subtitle';
import Title from '../components/movie-info/title';
import Overview from '../components/movie-info/overview';

function MovieInfo(props) {
    if (!props.movieInfo) return null;
    const {
        title, release_date: releaseDate, genres, runtime, vote_average: voteAverage, vote_count: voteCount, overview
    } = props.movieInfo;

    return (
        <div className="information">
            <Title
                title={title}
            />
            <Subtitle
                genres={genres}
                releaseDate={releaseDate}
                runtime={runtime}
            />
            <Votes
                voteAverage={voteAverage}
                voteCount={voteCount}
            />

            <Overview
                overview={overview}
            />
        </div>
    );
}

MovieInfo.propTypes = {
    movieInfo: PropTypes.any,
};

MovieInfo.defaultProps = {
    movieInfo: null,
};

export default MovieInfo;

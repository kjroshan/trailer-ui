import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrailer } from '../../store/actions';
import VideoPlayer from '../components/video-player';
import MovieInfo from '../components/movie-info';

class TrailerController extends PureComponent {
    componentDidMount() {
        const { movieId } = this.props;
        if (movieId) this.props.fetchTrailer(movieId);
    }

    render() {
        return (
            <div id="movie-info-section">
                <VideoPlayer />
                <MovieInfo />
            </div>
        );
    }
}

TrailerController.propTypes = {
    fetchTrailer: PropTypes.func.isRequired,
    movieId: PropTypes.string,
};

TrailerController.defaultProps = {
    movieId: null,
};

export default connect(null, { fetchTrailer })(TrailerController);

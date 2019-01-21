import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrailers, setTrailer } from '../../store/actions';
import VideoPlayer from '../components/player/video-player';
import MovieInfo from '../containers/movie-info';
import TrailerSwitcher from '../containers/trailer-switcher';

class TrailerController extends PureComponent {
    state = {
    };

    componentDidMount() {
        const { movieId } = this.props;
        if (movieId) this.props.fetchTrailers(movieId);
    }

    handleTrailerSwitch = (trailer) => {
        this.props.setTrailer(trailer.key);
    }

    render() {
        const { movieInfo, trailers, youtubeVideoId } = this.props;
        return (
            <div id="movie-info-section">
                <div className="video-container">
                    <VideoPlayer youtubeVideoId={youtubeVideoId} />
                    <TrailerSwitcher trailers={trailers} onSwitch={this.handleTrailerSwitch} />
                </div>
                <MovieInfo movieInfo={movieInfo} />
            </div>
        );
    }
}

TrailerController.propTypes = {
    fetchTrailers: PropTypes.func.isRequired,
    movieId: PropTypes.string,
    movieInfo: PropTypes.any,
    setTrailer: PropTypes.func.isRequired,
    trailers: PropTypes.arrayOf(PropTypes.any),
    youtubeVideoId: PropTypes.string
};

TrailerController.defaultProps = {
    movieId: null,
    movieInfo: null,
    trailers: null,
    youtubeVideoId: null
};

const mapStateToProps = state => ({
    youtubeVideoId: state.appStore.youtubeVideoId,
    movieInfo: state.appStore.movieInfo,
    trailers: state.appStore.trailers
});


export default connect(mapStateToProps, { fetchTrailers, setTrailer })(TrailerController);

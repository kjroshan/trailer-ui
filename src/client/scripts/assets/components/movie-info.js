import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrailer } from '../../store/actions';


class MovieInfo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        const { movieId } = this.props;
        if (movieId) this.props.fetchTrailer(movieId);
    }

    componentDidUpdate() {
        const { movieId } = this.props;
        if (movieId) this.props.fetchTrailer(movieId);
    }

    render() {
        const { youtubeVideoId } = this.props;

        if (!youtubeVideoId) {
            return (
                <div id="movie-info-section" />
            );
        }

        const embeddedURL = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;
        const infoString = 'Movie Info Area';

        return (
            <div id="movie-info-section">
                <div className="video-container">
                    <iframe
                        title="youtube-player"
                        width="100%"
                        height="100%"
                        src={embeddedURL}
                        frameBorder="0"
                        allowFullScreen=""
                    />
                </div>
                <div className="information">
                    <h1>{infoString}</h1>
                </div>
            </div>
        );
    }
}

MovieInfo.propTypes = {
    fetchTrailer: PropTypes.func.isRequired,
    movieId: PropTypes.string,
    youtubeVideoId: PropTypes.string,
};

MovieInfo.defaultProps = {
    movieId: null,
    youtubeVideoId: null
};

const mapStateToProps = state => ({
    youtubeVideoId: state.appStore.youtubeVideoId
});

export default connect(mapStateToProps, { fetchTrailer })(MovieInfo);

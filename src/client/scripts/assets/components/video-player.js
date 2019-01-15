import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class VideoPlayer extends PureComponent {
    render() {
        const { youtubeVideoId } = this.props;

        if (!youtubeVideoId) {
            return (
                <div className="video-container" />
            );
        }

        const embeddedURL = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;

        return (
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
        );
    }
}

VideoPlayer.propTypes = {
    youtubeVideoId: PropTypes.string,
};

VideoPlayer.defaultProps = {
    youtubeVideoId: null
};

const mapStateToProps = state => ({
    youtubeVideoId: state.appStore.youtubeVideoId
});

export default connect(mapStateToProps, { })(VideoPlayer);

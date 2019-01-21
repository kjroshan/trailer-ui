import React from 'react';
import PropTypes from 'prop-types';
import parse from 'date-fns/parse';
import map from 'lodash/map';

const subtitleStyle = {
    float: 'left',
    font: '24px Arial,sans-serif',
    fontWeight: 'normal',
    lineHeight: '110%',
    margin: '0px',
    color: '#555',
    padding: '0px 5px 0px 5px',
    borderRight: 'solid .05px darkgrey'
};

function Subtitle(props) {
    const {
        genres, runtime, releaseDate
    } = props;

    const genresTransform = map(genres, 'name');
    const genresString = genresTransform.join('/');
    const publishedYear = `${parse(releaseDate).getFullYear()}`;
    const runtimeString = `${Math.floor(runtime / 60)}h ${runtime % 60}m`;

    return (
        <div className="subtitle_wrapper" style={{ display: 'block', marginTop: '10px', width: '100%' }}>
            <div className="" style={subtitleStyle}>{genresString}</div>
            <div className="" style={subtitleStyle}>{publishedYear}</div>
            <div className="" style={subtitleStyle}>{runtimeString}</div>
        </div>
    );
}

Subtitle.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.any),
    releaseDate: PropTypes.string,
    runtime: PropTypes.number,
};

Subtitle.defaultProps = {
    genres: null,
    releaseDate: null,
    runtime: 0
};

export default Subtitle;

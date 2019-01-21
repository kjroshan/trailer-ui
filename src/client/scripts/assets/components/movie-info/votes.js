import React from 'react';
import PropTypes from 'prop-types';

const voteAverageStyle = {
    float: 'left',
    font: '24px Arial,sans-serif',
    fontWeight: 'bold',
    lineHeight: '110%',
    margin: '0px',
    color: '#000',
    padding: '0px 5px 0px 5px',
};

const voteCountStyle = {
    float: 'left',
    font: '18px Arial,sans-serif',
    fontWeight: 'normal',
    lineHeight: '110%',
    margin: '0px',
    color: '#000',
    padding: '0px 5px 0px 5px',
};

function Votes(props) {
    const {
        voteAverage, voteCount
    } = props;

    const voteAverageString = `${voteAverage}/10`;
    const voteCountString = ` (${voteCount} votes)`;
    return (
        <div className="vote_wrapper" style={{ display: 'inline-block', marginTop: '20px', width: '100%' }}>
            <div className="" style={voteAverageStyle}>{voteAverageString}</div>
            <div className="" style={voteCountStyle}>{voteCountString}</div>
        </div>
    );
}

Votes.propTypes = {
    voteAverage: PropTypes.number,
    voteCount: PropTypes.number
};

Votes.defaultProps = {
    voteAverage: null,
    voteCount: null
};

export default Votes;

import React from 'react';
import PropTypes from 'prop-types';

const titleStyle = {
    font: '36px Arial,sans-serif',
    fontWeight: 'normal',
    lineHeight: '110%',
    margin: '0px',
    color: '#000',
    paddingBottom: '3px'
};

function Title(props) {
    const {
        title
    } = props;

    return (
        <div className="title_wrapper">
            <h1 className="" style={titleStyle}>{title}</h1>
        </div>
    );
}

Title.propTypes = {
    title: PropTypes.string
};

Title.defaultProps = {
    title: null
};

export default Title;

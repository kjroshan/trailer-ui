import React from 'react';
import PropTypes from 'prop-types';


function TrailerButton(props) {
    const {
        className, trailer, onClick
    } = props;

    const imgSource = `http://i1.ytimg.com/vi/${trailer.key}/default.jpg`;

    return (
        <div className={className} onClick={() => onClick(trailer)} onKeyUp={() => {}}>
            <img alt={trailer.name} src={imgSource} style={{ width: '148px', height: '111px' }} />
        </div>
    );
}

TrailerButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    trailer: PropTypes.any
};

TrailerButton.defaultProps = {
    className: null,
    onClick: null,
    trailer: null
};

export default TrailerButton;

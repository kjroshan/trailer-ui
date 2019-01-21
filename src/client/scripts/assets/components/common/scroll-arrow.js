import React from 'react';
import PropTypes from 'prop-types';


function ScrollArrow(props) {
    const {
        className, arrowString, iconClassName, onClick
    } = props;

    return (
        <div className={className}>
            <i className={iconClassName} style={{ fontSize: '32px', lineHeight: '1em' }} onClick={onClick} onKeyUp={() => {}}>
                {arrowString}
            </i>
        </div>
    );
}

ScrollArrow.propTypes = {
    arrowString: PropTypes.string,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    onClick: PropTypes.func
};

ScrollArrow.defaultProps = {
    arrowString: null,
    className: null,
    iconClassName: null,
    onClick: null
};

export default ScrollArrow;

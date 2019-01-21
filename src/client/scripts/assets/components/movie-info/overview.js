import React from 'react';
import PropTypes from 'prop-types';

function Overview(props) {
    const {
        overview
    } = props;

    return (
        <div className="overview_wrapper"
            style={{
                font: '14px Arial,sans-serif',
                fontWeight: 'normal',
                display: 'inline-block',
                marginTop: '20px',
                width: '100%'
            }}
        >
            {overview}
        </div>
    );
}

Overview.propTypes = {
    overview: PropTypes.string
};

Overview.defaultProps = {
    overview: null
};

export default Overview;

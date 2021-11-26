import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description It is displayed when data isn't available, the rest of the page can be display
 * @type {Function} Unavailable - Functional component
 * @param {string} color
 * @returns {ReactElement} Unavailable
 */
const Unavailable = ({ color }) => {
    return (
        <div
            className="unavailable"
            width="100%"
            height="100%"
            style={{
                textAlign: 'center',
                color: color,
                position: 'relative',
            }}
        >
            <span style={{ fontSize: '1rem' }}>{`Indisponible`}</span>
        </div>
    );
};

Unavailable.propTypes = {
    color: PropTypes.string.isRequired,
};

Unavailable.defaultProps = {
    color: '#000',
};

export default Unavailable;

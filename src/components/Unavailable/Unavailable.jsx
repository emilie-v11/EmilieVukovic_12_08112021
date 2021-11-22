import React from 'react';
import PropTypes from 'prop-types';

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

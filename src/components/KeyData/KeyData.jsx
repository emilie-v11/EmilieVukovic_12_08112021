import React from 'react';
import './KeyData.css';
import PropTypes from 'prop-types';

const KeyData = ({ style, src, altText, count, unit, nutrientsType }) => {
    return (
        <div className="keys-data-card">
            <div className="key-data-icon" style={style}>
                <img className="icon-img" src={src} alt={altText} />
            </div>
            <p className="key-data-value">
                <span className="calorie-count">
                    {count}
                    {unit}
                </span>
                <span className="nutrients-type">{nutrientsType}</span>
            </p>
        </div>
    );
};

KeyData.propTypes = {
    style: PropTypes.object,
    src: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    count: PropTypes.number,
    unit: PropTypes.string.isRequired,
    nutrientsType: PropTypes.string.isRequired,
};

export default KeyData;

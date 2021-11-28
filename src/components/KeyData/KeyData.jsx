import React from 'react';
import './KeyData.css';
import PropTypes from 'prop-types';

/**
 * Card with kcal & nutrients informations
 * @param {string} src - url for image
 * @param {number} count - number of quantity
 * @param {string} unit - unit (kg, kcal...)
 * @param {string} nutrientsType - type of nutrients (protein,carbohydrat...)
 *
 * @returns {ReactElement}
 */

const KeyData = ({ src, count, unit, nutrientsType }) => {
    return (
        <div className="keys-data-card">
            <div className="key-data-icon">
                <img className="icon-img" src={src} alt="" />
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
    count: PropTypes.number,
    unit: PropTypes.string.isRequired,
    nutrientsType: PropTypes.string.isRequired,
};

export default KeyData;

import React from 'react';
import './KeyData.css';
import PropTypes from 'prop-types';

/** 
 // http://localhost:3000/user/${id}
 * @description Card with kcal & nutrients informations
 * @type {Function} KeyData - Functional component
 * @param {string} src - url for image
 * @param {number} count - number of quantity
 * @param {string} unit - unit (kg, kcal...)
 * @param {string} nutrientsType - type of nutrients (protein,carbohydrat...)
 * @returns {ReactElement} 
 *
 // Props : Object with 4 properties
 * @typedef {Object} KeyData
 * @property {number} calorieCount
 * @property {number} proteinCount
 * @property {number} carbohydrateCount
 * @property {number} lipidCount
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

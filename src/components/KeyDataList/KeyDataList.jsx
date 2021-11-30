import React from 'react';
import PropTypes from 'prop-types';
import KeyData from './KeyData/KeyData';
import Calories from '../../assets/icons-keyData/calories-icon.png';
import Protein from '../../assets/icons-keyData/protein-icon.png';
import Carbs from '../../assets/icons-keyData/carbs-icon.png';
import Fat from '../../assets/icons-keyData/fat-icon.png';

/**
 * List of keyData
 * @param {object} keyData - calorieCount, proteinCount, carbohydrateCount, lipidCount
 * @returns {ReactElement} KeyDataList component
 */
const KeyDataList = ({ keyData }) => {
    return (
        <>
            <KeyData
                src={Calories}
                count={keyData.calorieCount}
                unit={'kCal'}
                nutrientsType={'Calories'}
            />
            <KeyData
                src={Protein}
                count={keyData.proteinCount}
                unit={'g'}
                nutrientsType={'Proteines'}
            />
            <KeyData
                src={Carbs}
                count={keyData.carbohydrateCount}
                unit={'g'}
                nutrientsType={'Glucides'}
            />
            <KeyData
                src={Fat}
                count={keyData.lipidCount}
                unit={'g'}
                nutrientsType={'Lipides'}
            />
        </>
    );
};

KeyDataList.propTypes = {
    keyData: PropTypes.object,
};

export default KeyDataList;

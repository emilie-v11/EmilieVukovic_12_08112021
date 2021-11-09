import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ButtonIcon.css';

/**
 *
 */

const ButtonIcon = ({ path, imgSrc, altText }) => {
    return (
        <NavLink
            className={navData =>
                navData.isActive ? 'nav-icon selected' : 'nav-icon'
            }
            to={path}
        >
            <button className="btn-icon">
                <img className="icon" src={imgSrc} alt={altText} />
            </button>
        </NavLink>
    );
};

ButtonIcon.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
};

export default ButtonIcon;

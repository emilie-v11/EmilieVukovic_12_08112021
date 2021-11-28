import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ButtonIcon.css';

/**
 * Secondary menu navigation button in NavIcons
 * @param {string} path - link, direction when is clicked
 * @param {string} imgSrc - image's URL
 * @param {string} altText - image's alt, description for screen reader
 * @returns {ReactElement} ButtonIcon component
 */
const ButtonIcon = ({ path, imgSrc, altText }) => {
    return (
        <NavLink
            className="nav-icon"
            to={path}
            onClick={e => e.preventDefault()}
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
    path: PropTypes.string.isRequired,
};

export default ButtonIcon;

import React from 'react';
import ButtonIcon from './ButtonIcon/ButtonIcon';
import MeditationIcon from '../../assets/icons-NavIcon/meditation-icon.svg';
import SwimmingIcon from '../../assets/icons-NavIcon/swimming-icon.svg';
import CyclingIcon from '../../assets/icons-NavIcon/cycling-icon.svg';
import WeightIcon from '../../assets/icons-NavIcon/weight-icon.svg';
import './NavIcons.css';

/**
 * @description Secondary menu navigation
 * @type {Function} NavIcons - Functional component
 * @returns {ReactElement} NavIcons component
 */
const NavIcons = () => {
    return (
        <nav className="nav-icons">
            <div className="container-icons">
                <ButtonIcon
                    path="/user/meditation"
                    imgSrc={MeditationIcon}
                    altText="Voir méditation"
                />
                <ButtonIcon
                    path="/user/swimming"
                    imgSrc={SwimmingIcon}
                    altText="Voir natation"
                />

                <ButtonIcon
                    path="/user/cycling"
                    imgSrc={CyclingIcon}
                    altText="Voir cyclisme"
                />

                <ButtonIcon
                    path="/user/weight"
                    imgSrc={WeightIcon}
                    altText="Voir musculation"
                />
            </div>
            <span className="copyright">
                Copyright, SportSee {new Date().getFullYear()}
            </span>
        </nav>
    );
};

export default NavIcons;

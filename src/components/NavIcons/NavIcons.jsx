import React from 'react';
// import { NavLink } from 'react-router-dom';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import MeditationIcon from '../../assets/meditation-icon.svg';
import SwimmingIcon from '../../assets/swimming-icon.svg';
import CyclingIcon from '../../assets/cycling-icon.svg';
import WeightIcon from '../../assets/weight-icon.svg';
import './NavIcons.css';

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

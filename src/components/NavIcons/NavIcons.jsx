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
            <ButtonIcon
                path="/user"
                imgSrc={MeditationIcon}
                altText="Voir méditation"
            />
            <ButtonIcon
                path="/user"
                imgSrc={SwimmingIcon}
                altText="Voir natation"
            />

            <ButtonIcon
                path="/user"
                imgSrc={CyclingIcon}
                altText="Voir cyclisme"
            />

            <ButtonIcon
                path="/user"
                imgSrc={WeightIcon}
                altText="Voir musculation"
            />

            {/* <NavLink
                className={navData =>
                    navData.isActive ? 'nav-icon selected' : 'nav-icon'
                }
                to="/swimming"
            >
                <ButtonIcon imgSrc={SwimmingIcon} altText="Voir natation" />
            </NavLink>
            <NavLink
                className={navData =>
                    navData.isActive ? 'nav-icon selected' : 'nav-icon'
                }
                to="/cycling"
            >
                <ButtonIcon path="/user" imgSrc={CyclingIcon} altText="Voir cyclisme" />
            </NavLink>
            <NavLink
                className={navData =>
                    navData.isActive ? 'nav-icon selected' : 'nav-icon'
                }
                to="/weight"
            >
                <ButtonIcon path="/user" imgSrc={WeightIcon} altText="Voir musculation" />
            </NavLink> */}
            <p className="copyright">
                Copyright, SportSee {new Date().getFullYear()}
            </p>
        </nav>
    );
};

export default NavIcons;

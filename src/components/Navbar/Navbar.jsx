import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../Logo/logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav-header">
            <Logo className="logo-header" />
            <NavLink
                className={navData =>
                    navData.isActive ? 'nav-item selected' : 'nav-item'
                }
                // className="Nav-Item"
                // activeClassName="selected"
                to="/"
            >
                Accueil
            </NavLink>
            <NavLink
                className={navData =>
                    navData.isActive ? 'nav-item selected' : 'nav-item'
                }
                to="/profile"
            >
                Profil
            </NavLink>
            <NavLink
                className={navData =>
                    navData.isActive ? 'nav-item selected' : 'nav-item'
                }
                to="/setting"
            >
                Réglage
            </NavLink>
            <NavLink
                className={navData =>
                    navData.isActive ? 'nav-item selected' : 'nav-item'
                }
                to="/community"
            >
                Communauté
            </NavLink>
        </nav>
    );
};

export default Navbar;

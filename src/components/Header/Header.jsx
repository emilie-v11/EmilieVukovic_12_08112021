import React from 'react';
import './Header.css';
import MainNav from './MainNav/MainNav';
// import NavIcons from '../NavIcons/NavIcons';

/**
 * Header of the website app
 * @returns {ReactElement} Header component
 */
const Header = () => {
    return (
        <header>
            <MainNav />
            {/* <NavIcons /> */}
        </header>
    );
};

export default Header;

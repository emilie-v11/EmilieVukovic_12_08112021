import React from 'react';
import './Header.css';
import MainNav from './MainNav/MainNav';
// import NavIcons from '../NavIcons/NavIcons';

/**
 * @type {Function} Header - Functional component
 * @returns {ReactElement} Header of the website app
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

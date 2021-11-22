import React from 'react';
import './Header.css';
import MainNav from './MainNav/MainNav';
// import NavIcons from '../NavIcons/NavIcons';

const Header = () => {
    return (
        <header>
            <MainNav />
            {/* <NavIcons /> */}
        </header>
    );
};

export default Header;

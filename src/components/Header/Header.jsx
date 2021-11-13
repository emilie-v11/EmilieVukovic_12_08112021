import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import NavIcons from '../NavIcons/NavIcons';

const Header = () => {
    return (
        <header>
            <Navbar />
            <NavIcons />
        </header>
    );
};

export default Header;

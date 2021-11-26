import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error404.css';

/**
 * @type {Function} Error404 - Functional component
 * @returns {ReactElement} is displayed when error 404
 */
const Error404 = () => {
    return (
        <main className="Main-Error404">
            <div className="Content-404">
                <span className="Number-404">404</span>
                <p className="Text-404">
                    Oups ! La page que vous demandez n'existe pas
                </p>
            </div>
            <NavLink className="Back-Home" to="/">
                Retourner sur la page d'accueil
            </NavLink>
        </main>
    );
};

export default Error404;

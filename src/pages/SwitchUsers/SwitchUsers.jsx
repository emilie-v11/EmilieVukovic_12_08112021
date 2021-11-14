import React from 'react';
import { NavLink } from 'react-router-dom';
import './SwitchUsers.css';

const SwitchUsers = () => {
    return (
        <main className="main-switchUsers">
            <h1>Switch Users</h1>
            <section className="container-users">
                <NavLink className="user id-12" to="/profile/user/12">
                    <h2>Karl Dovineau</h2>
                    <p>profile/user/12</p>
                </NavLink>
                <NavLink className="user id-18" to="/profile">
                    {/* <NavLink className="user id-18" to="/profile/user/18"> */}
                    <h2>Cecilia Ratorez</h2>
                    <p>profile/user/18</p>
                </NavLink>
            </section>
        </main>
    );
};

export default SwitchUsers;

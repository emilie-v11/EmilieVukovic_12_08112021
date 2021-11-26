import React from 'react';
import { NavLink } from 'react-router-dom';
import './SwitchUsers.css';
import { userData } from '../../services/mock/data';

/**
 * @description This is a temporary page, it replaces the unavailable Connection function. It allows you to switch from one user to another while waiting.
 * @type {Function} SwitchUsers - Functional component
 * @returns {ReactElement} SwitchUsers
 */
const SwitchUsers = () => {
    return (
        <main className="main-switchUsers">
            <h1>Switch Users</h1>
            <section className="container-users">
                {userData.map(user => (
                    <NavLink
                        key={user.id}
                        className="user"
                        to={`/profile/user/${user.id}`}
                    >
                        <h2>
                            {`${user.userInfos.firstName}
                            ${user.userInfos.lastName}`}
                        </h2>
                        <p>profile/user/{user.id}</p>
                    </NavLink>
                ))}
            </section>
        </main>
    );
};

export default SwitchUsers;

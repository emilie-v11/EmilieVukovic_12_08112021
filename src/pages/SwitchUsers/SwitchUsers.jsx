import React from 'react';
import { NavLink } from 'react-router-dom';
import './SwitchUsers.css';
import { USER_MAIN_DATA } from '../../services/mock/data';

/**
 * This is a temporary page, it replaces the unavailable Connection function. It allows you to switch from one user to another while waiting.
 * @returns {ReactElement} SwitchUsers
 */

const SwitchUsers = () => {
    return (
        <main className="main-switchUsers">
            <h1>Switch Users</h1>
            <section className="container-users">
                {USER_MAIN_DATA.map(user => (
                    <NavLink key={user.id} className="user" to={`/profile/user/${user.id}`}>
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

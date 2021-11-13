import React from 'react';
import './UserPage.css';
import Energy from '../../assets/energy.svg';
import Chicken from '../../assets/chicken.svg';
import Apple from '../../assets/apple.svg';
import Cheeseburger from '../../assets/cheeseburger.svg';

const UserPage = () => {
    return (
        <main className="main-userPage">
            <div className="userPage-heading">
                <h1>
                    Bonjour <span>Cecilia</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="userPage-informations">
                <div className="userPage-graphs">
                    <div className="day-activity">
                        <div className="bar-chart">1</div>
                    </div>
                    <div className="trio-charts">
                        <div className="line-chart">2</div>
                        <div className="radar-chart">3</div>
                        <div className="radial-bar-chart">4</div>
                    </div>
                </div>

                <div className="keys-data-cards">
                    <div className="keys-data-card">
                        <div
                            className="key-data-icon"
                            style={{ background: 'rgba(255, 0, 0, 0.1)' }}
                        >
                            <img className="icon-img" src={Energy} alt="" />
                        </div>
                        <p className="key-data-value">
                            <span className="calorieCount">1,930kCal</span>
                            <span className="unit-measurement">Calories</span>
                        </p>
                    </div>

                    <div className="keys-data-card">
                        <div
                            className="key-data-icon"
                            style={{ background: 'rgba(74, 184, 255, 0.1)' }}
                        >
                            <img className="icon-img" src={Chicken} alt="" />
                        </div>
                        <p className="key-data-value">
                            <span className="calorieCount">1,930kCal</span>
                            <span className="unit-measurement">Calories</span>
                        </p>
                    </div>

                    <div className="keys-data-card">
                        <div
                            className="key-data-icon"
                            style={{ background: 'rgba(249, 206, 35, 0.2)' }}
                        >
                            <img className="icon-img" src={Apple} alt="" />
                        </div>
                        <p className="key-data-value">
                            <span className="calorieCount">1,930kCal</span>
                            <span className="unit-measurement">Calories</span>
                        </p>
                    </div>

                    <div className="keys-data-card">
                        <div
                            className="key-data-icon"
                            style={{ background: 'rgba(253, 81, 129, 0.1' }}
                        >
                            <img
                                className="icon-img"
                                src={Cheeseburger}
                                alt=""
                            />
                        </div>
                        <p className="key-data-value">
                            <span className="calorieCount">1,930kCal</span>
                            <span className="unit-measurement">Calories</span>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UserPage;

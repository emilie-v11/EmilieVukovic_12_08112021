import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Energy from '../../assets/icons-keyData/energy.svg';
import Chicken from '../../assets/icons-keyData/chicken.svg';
import Apple from '../../assets/icons-keyData/apple.svg';
import Cheeseburger from '../../assets/icons-keyData/cheeseburger.svg';
import Loader from '../../components/Loader/Loader';
import Error404 from '../Error404/Error404';
// import { userData } from '../../mock/data.js';
import './ProfilePage.css';
import {
    getUserInfos,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
} from '../../services/calls-API';

const ProfilePage = () => {
    const [userInfos, setUserInfos] = useState({});
    const [userActivity, setUserActivity] = useState({});
    const [userAverageSessions, setUserAverageSessions] = useState({});
    const [userPerformance, setUserPerformance] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        setIsLoading(true);
        setError(false);
        
        async function getUserInfosData() {
            try {
                const response = await getUserInfos(id);
                console.log('userInfos', response.data.data);
                setUserInfos(response.data.data);
            } catch (error) {
                console.error('Error: userInfos', error);
                setError(true);
            }
        }

        async function getUserActivityData() {
            try {
                const response = await getUserActivity(id);
                console.log('userActivity', response.data.data);
                setUserActivity(response.data.data);
            } catch (error) {
                console.error('Error: userActivity', error);
                setError(true);
            }
        }

        async function getUserAverageSessionsData() {
            try {
                const response = await getUserAverageSessions(id);
                console.log('userAverageSessions', response.data.data);
                setUserAverageSessions(response.data.data);
            } catch (error) {
                console.error('Error: userAverageSessions', error);
                setError(true);
            }
        }

        async function getUserPerformanceData() {
            try {
                const response = await getUserPerformance(id);
                console.log('userPerformance', response.data.data);
                setUserPerformance(response.data.data);
            } catch (error) {
                console.error('Error: userPerformance', error);
                setError(true);
            }
        }
        getUserInfosData();
        getUserActivityData();
        getUserAverageSessionsData();
        getUserPerformanceData();
    }, [id]);

    // try {
    //     const { data, error, isLoading } = useFetch(url);
    //     const userInfos = data.userInfos;
    //     const keyData = data.keyData;
    //     console.log(userInfos);
    //     console.log(keyData);
    // } catch (error) {
    //     console.error('Error:', error);
    // }

    // async function fetchData() {
    //     setIsLoading(true);
    //     setError(false);

    //     try {
    //         const response = await fetch('http://localhost:3000/user/{id}');
    //         const dataJson = await response.json();

    //         if (!response.ok) {
    //             throw new Error('Something went wrong !');
    //         }
    //         console.log(dataJson);

    //         const dataUser = dataJson.data.map(el => {
    //             return {
    //                 id: el.id,
    //                 firstName: el.firstName,
    //             };
    //         });
    //         setData(dataUser);
    //         setIsLoading(false);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    // }

    return (
        <main className="main-userPage">
            <div className="userPage-heading">
                <h1>
                    Bonjour <span className="userPage-firstName"> Prénom</span>
                    {/* {!isLoading && (
                        <span className="userPage-firstName">Prénom{id}</span>
                    )}
                    {!isLoading && error && <Error404 />}
                    {isLoading && <p>Loading...</p>} */}
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
                            <span className="calorie-count">1,930kCal</span>
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
                            <span className="calorie-count">155g</span>
                            <span className="unit-measurement">Proteines</span>
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
                            <span className="calorie-count">290g</span>
                            <span className="unit-measurement">Glucides</span>
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
                            <span className="calorie-count">50g</span>
                            <span className="unit-measurement">Lipides</span>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProfilePage;

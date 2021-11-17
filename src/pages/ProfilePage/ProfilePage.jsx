import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';
import Energy from '../../assets/icons-keyData/energy.svg';
import Chicken from '../../assets/icons-keyData/chicken.svg';
import Apple from '../../assets/icons-keyData/apple.svg';
import Cheeseburger from '../../assets/icons-keyData/cheeseburger.svg';
// import Loader from '../../components/Loader/Loader';
// import Error404 from '../Error404/Error404';
// import { userData } from '../../mock/data.js';
import {
    getUserInfos,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
} from '../../services/calls-API';
import KeyData from '../../components/KeyData/KeyData';
import RadarChartGraph from '../../components/RadarChartGraph/RadarChartGraph';

const ProfilePage = () => {
    const [userInfos, setUserInfos] = useState({
        firstName: '',
    });
    const [todayScore, setTodayScore] = useState('');
    const [keyData, setKeyData] = useState({});
    const [userActivity, setUserActivity] = useState({});
    const [userAverageSessions, setUserAverageSessions] = useState({});
    const [userPerformance, setUserPerformance] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const { id } = useParams();
    console.log(id);
    console.log(userActivity, userAverageSessions, isLoading, error);

    useEffect(() => {
        setIsLoading(true);
        setError(false);

        // async function getProfileAllData() {
        //     try {
        //         const userInfos = await getUserInfos(id);
        //         setUserInfos(userInfos.data.data.userInfos);
        //         setTodayScore(userInfos.data.data.todayScore);
        //         setKeyData(userInfos.data.data.keyData);

        //         const activity = await getUserActivity(id);
        //         setUserActivity(activity.data.data);

        //         const averageSessions = await getUserAverageSessions(id);
        //         setUserAverageSessions(averageSessions.data.data);

        //         const performance = await getUserPerformance(id);
        //         setUserPerformance(performance.data.data);

        //         console.log('userInfos', userInfos.data.data.userInfos);
        //         console.log('todayScore', userInfos.data.data.todayScore);
        //         console.log('keyData', userInfos.data.data.keyData);
        //         console.log('activity', activity.data.data);
        //         console.log('averageSessions', averageSessions.data.data);
        //         console.log('performance', performance.data.data.data);
        //     } catch (error) {
        //         console.error('Error: profileAllData', error);
        //         setError(true);
        //     }
        // }
        // getProfileAllData();
        // setIsLoading(false);

        async function getUserInfosData() {
            try {
                const response = await getUserInfos(id);
                setUserInfos(response.data.data.userInfos);
                setTodayScore(
                    response.data.data.todayScore || response.data.data.score
                );
                setKeyData(response.data.data.keyData);
                console.log('userInfos', response.data.data.userInfos);
                console.log(
                    'todayScore',
                    response.data.data.todayScore,
                    response.data.data.score
                );
                console.log('keyData', response.data.data.keyData);
            } catch (error) {
                console.error('Error: userInfos', error);
                setError(true);
            }
        }

        async function getUserActivityData() {
            try {
                const response = await getUserActivity(id);
                console.log('activity', response.data.data);
                setUserActivity(response.data.data);
            } catch (error) {
                console.error('Error: activity', error);
                setError(true);
            }
        }

        async function getUserAverageSessionsData() {
            try {
                const response = await getUserAverageSessions(id);
                console.log('averageSessions', response.data.data);
                setUserAverageSessions(response.data.data);
            } catch (error) {
                console.error('Error: averageSessions', error);
                setError(true);
            }
        }

        async function getUserPerformanceData() {
            try {
                const response = await getUserPerformance(id);
                console.log('performance', response.data.data.data);
                setUserPerformance(response.data.data.data);
            } catch (error) {
                console.error('Error: performance', error);
                setError(true);
            }
        }

        getUserInfosData();
        getUserActivityData();
        getUserAverageSessionsData();
        getUserPerformanceData();

        setIsLoading(false);
    }, [id]);

    /* {!isLoading && (
    )}
    {!isLoading && error && <Error404 />}
    {isLoading && <p>Loading...</p>} */

    // const { firstName } = userInfos.firstName;
    // const calorieCount = keyData.calorieCount;
    // console.log(calorieCount);

    return (
        <main className="main-userPage">
            <div className="userPage-heading">
                <h1>
                    {`Bonjour `}
                    <span className="userPage-firstName">
                        {userInfos.firstName}
                    </span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="userPage-informations">
                <div className="userPage-graphs">
                    <div className="day-activity">
                        <div className="bar-chart-graph">1</div>
                    </div>
                    <div className="trio-charts">
                        <div className="line-chart-graph">2</div>
                        <div className="radar-chart-graph">
                            <RadarChartGraph
                                userPerformance={userPerformance}
                            />
                        </div>
                        <div className="radialbar-chart-graph">
                            {todayScore}
                        </div>
                    </div>
                </div>

                <div className="keys-data-cards">
                    <KeyData
                        style={{ background: 'rgba(255, 0, 0, 0.1)' }}
                        src={Energy}
                        altText={''}
                        count={keyData.calorieCount}
                        unit={'kCal'}
                        nutrientsType={'Calories'}
                    />
                    <KeyData
                        style={{ background: 'rgba(74, 184, 255, 0.1)' }}
                        src={Chicken}
                        altText={''}
                        count={keyData.proteinCount}
                        unit={'g'}
                        nutrientsType={'Proteines'}
                    />
                    <KeyData
                        style={{ background: 'rgba(249, 206, 35, 0.2)' }}
                        src={Apple}
                        altText={''}
                        count={keyData.carbohydrateCount}
                        unit={'g'}
                        nutrientsType={'Glucides'}
                    />
                    <KeyData
                        style={{ background: 'rgba(253, 81, 129, 0.1' }}
                        src={Cheeseburger}
                        altText={''}
                        count={keyData.lipidCount}
                        unit={'g'}
                        nutrientsType={'Lipides'}
                    />
                </div>
            </div>
        </main>
    );
};

export default ProfilePage;

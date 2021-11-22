import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';
import Calories from '../../assets/icons-keyData/calories-icon.png';
import Protein from '../../assets/icons-keyData/protein-icon.png';
import Carbs from '../../assets/icons-keyData/carbs-icon.png';
import Fat from '../../assets/icons-keyData/fat-icon.png';
import Loader from '../../components/Loader/Loader';
import Error404 from '../Error404/Error404';
import KeyData from '../../components/KeyData/KeyData';
import RadarChartGraph from '../../components/Charts/RadarChartGraph/RadarChartGraph';
import RadialBarChartGraph from '../../components/Charts/RadialBarChartGraph/RadialBarChartGraph';
import LineChartGraph from '../../components/Charts/LineChartGraph/LineChartGraph';
import BarChartGraph from '../../components/Charts/BarChartGraph/BarChartGraph';
import {
    getUserInfos,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
} from '../../services/API/calls-API';

const ProfilePage = () => {
    const [userInfos, setUserInfos] = useState({});
    const [todayScore, setTodayScore] = useState();
    const [keyData, setKeyData] = useState({});
    const [userActivity, setUserActivity] = useState([]);
    const [userAverageSessions, setUserAverageSessions] = useState([]);
    const [userPerformance, setUserPerformance] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        setError(false);

        async function getProfilePageAllData() {
            try {
                const userInfos = await getUserInfos(id);
                setUserInfos(userInfos.data.data.userInfos);
                setKeyData(userInfos.data.data.keyData);
                setTodayScore(
                    userInfos.data.data.todayScore || userInfos.data.data.score
                );

                const activity = await getUserActivity(id);
                setUserActivity(activity.data.data.sessions);

                const averageSessions = await getUserAverageSessions(id);
                setUserAverageSessions(averageSessions.data.data.sessions);

                const performance = await getUserPerformance(id);
                setUserPerformance(performance.data.data.data);

                // console.log('userId', userInfos.data.data);
                // console.log('userInfos', userInfos.data.data.userInfos);
                // console.log('todayScore', userInfos.data.data.todayScore);
                // console.log('keyData', userInfos.data.data.keyData);
                // console.log('activity', activity.data.data.sessions);
                // console.log(
                //     'averageSessions',
                //     averageSessions.data.data.sessions
                // );
                // console.log('performance', performance.data.data.data);
            } catch (error) {
                console.error('Error: profileAllData', error);
                setError(true);
            }
        }
        getProfilePageAllData();
        setIsLoading(false);

        // async function getUserInfosData() {
        //     try {
        //         const response = await getUserInfos(id);
        //         setUserInfos(response.data.data.userInfos);
        //         setTodayScore(
        //             response.data.data.todayScore || response.data.data.score
        //         );
        //         setKeyData(response.data.data.keyData);
        //         console.log('userInfos', response.data.data.userInfos);
        //         console.log(
        //             'todayScore',
        //             response.data.data.todayScore,
        //             response.data.data.score
        //         );
        //         console.log('keyData', response.data.data.keyData);
        //     } catch (error) {
        //         console.error('Error: userInfos', error);
        //         setError(true);
        //     }
        // }

        // async function getUserActivityData() {
        //     try {
        //         const response = await getUserActivity(id);
        //         console.log('activity', response.data.data);
        //         setUserActivity(response.data.data);
        //     } catch (error) {
        //         console.error('Error: activity', error);
        //         setError(true);
        //     }
        // }

        // async function getUserAverageSessionsData() {
        //     try {
        //         const response = await getUserAverageSessions(id);
        //         console.log('averageSessions', response.data.data);
        //         setUserAverageSessions(response.data.data);
        //     } catch (error) {
        //         console.error('Error: averageSessions', error);
        //         setError(true);
        //     }
        // }

        // async function getUserPerformanceData() {
        //     try {
        //         const response = await getUserPerformance(id);
        //         console.log('performance', response.data.data.data);
        //         setUserPerformance(response.data.data.data);
        //     } catch (error) {
        //         console.error('Error: performance', error);
        //         setError(true);
        //     }
        // }

        // getUserInfosData();
        // getUserActivityData();
        // getUserAverageSessionsData();
        // getUserPerformanceData();

        // setIsLoading(false);
    }, [id]);

    if ((!isLoading && error) || id === undefined || setError === true) {
        return <Error404 />;
    } else if (isLoading) {
        return <Loader />;
    } else {
        return (
            <main className="main-profilePage">
                <div className="profilePage-heading">
                    <h1>
                        {`Bonjour `}
                        <span className="profilePage-firstName">
                            {userInfos.firstName}
                        </span>
                    </h1>
                    <p>
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                </div>

                <div className="profilePage-informations">
                    <div className="profilePage-graphs">
                        <div className="day-activity">
                            <div className="bar-chart-graph">
                                <BarChartGraph userActivity={userActivity} />
                            </div>
                        </div>
                        <div className="trio-charts">
                            <div className="line-chart-graph">
                                <LineChartGraph
                                    userAverageSessions={userAverageSessions}
                                />
                            </div>
                            <div className="radar-chart-graph">
                                <RadarChartGraph
                                    userPerformance={userPerformance}
                                />
                            </div>
                            <div className="radialbar-chart-graph">
                                <RadialBarChartGraph todayScore={todayScore} />
                            </div>
                        </div>
                    </div>

                    <div className="keys-data-cards">
                        <KeyData
                            src={Calories}
                            count={keyData.calorieCount}
                            unit={'kCal'}
                            nutrientsType={'Calories'}
                        />
                        <KeyData
                            src={Protein}
                            count={keyData.proteinCount}
                            unit={'g'}
                            nutrientsType={'Proteines'}
                        />
                        <KeyData
                            src={Carbs}
                            count={keyData.carbohydrateCount}
                            unit={'g'}
                            nutrientsType={'Glucides'}
                        />
                        <KeyData
                            src={Fat}
                            count={keyData.lipidCount}
                            unit={'g'}
                            nutrientsType={'Lipides'}
                        />
                    </div>
                </div>
            </main>
        );
    }
};

export default ProfilePage;

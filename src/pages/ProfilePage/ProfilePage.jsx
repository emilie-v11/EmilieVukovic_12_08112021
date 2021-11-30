import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';
import Loader from '../../components/Loader/Loader';
import Error404 from '../Error404/Error404';
import RadarChartGraph from '../../components/Charts/RadarChartGraph/RadarChartGraph';
import RadialBarChartGraph from '../../components/Charts/RadialBarChartGraph/RadialBarChartGraph';
import LineChartGraph from '../../components/Charts/LineChartGraph/LineChartGraph';
import BarChartGraph from '../../components/Charts/BarChartGraph/BarChartGraph';
import KeyDataList from '../../components/KeyDataList/KeyDataList';
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

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        /**
         * @async
         * @returns {Response}
         * @throws {Error}
         */
        async function getProfilePageAllData() {
            try {
                /**
                 * userInfos {object} - keydata {object} - todayScore {number}
                 * @constant userInfos
                 *
                 * @property {string} firstName - userInfos
                 * @property {string} lastName - userInfos
                 * @property {number} age - userInfos
                 *
                 * @property {number} calorieCount - keydata
                 * @property {number} proteinCount - keydata
                 * @property {number} carbohydrateCount - keydata
                 * @property {number} lipidCount - keydata
                 *
                 * @property {number} todayscore - todayscore
                 * @property {number} score - todayscore
                 */
                const userInfos = await getUserInfos(id);
                setUserInfos(userInfos.data.data.userInfos);
                setKeyData(userInfos.data.data.keyData);
                // Error in Backend API different name for the same property:
                // user12 => todayscore / user18 => score
                setTodayScore(
                    userInfos.data.data.todayScore || userInfos.data.data.score
                );

                /**
                 * Array of object
                 * @constant activity
                 * @property {string|number} day
                 * @property {number} kilogram
                 * @property {number} calories
                 */
                const activity = await getUserActivity(id);
                setUserActivity(activity.data.data.sessions);

                /**
                 * Array of object
                 * @constant averageSessions
                 * @property {number} day
                 * @property {number} sessionLength
                 */
                const averageSessions = await getUserAverageSessions(id);
                setUserAverageSessions(averageSessions.data.data.sessions);

                /**
                 * Array of object
                 * @constant performance
                 * @property {number} value
                 * @property {number} kind
                 */
                const performance = await getUserPerformance(id);
                setUserPerformance(performance.data.data.data);
            } catch (error) {
                console.error('Error: profileAllData', error);
                setError(true);
            }
            setIsLoading(false);
        }
        getProfilePageAllData();
    }, [id]);

    const { firstName } = userInfos;

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
                            {firstName}
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
                        <KeyDataList keyData={keyData} />
                    </div>
                </div>
            </main>
        );
    }
};

export default ProfilePage;

import React from 'react';
import PropTypes from 'prop-types';
import './RadialBarChartGraph.css';
import {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
} from 'recharts';
import Unavailable from '../../Unavailable/Unavailable';

/** http://localhost:3000/user/${id}
 * @type {Function} RadarChartGraph - Functional component
 * @param {number} todayScore - decimal number between 0 and 1, percentage of completion of the goal
 * @returns {ReactElement} RadarChart Graph with Recharts contain the array's data.
 *
 * Props : Erreur in Backend API different name for the same property
 * for user id: 12 : todayscore, for user id: 18 : score
 * @property {number} todayScore || @property {number} score
 */

const RadialBarChartGraph = ({ todayScore }) => {
    //if data's props aren't available, return 'Unvailable' component in place of Graph
    if (!todayScore) {
        return <Unavailable color="#74798c" />;
    }

    const data = [
        {
            score: todayScore,
            // scorePercentage: todayScore * 100,
        },
    ];

    return (
        <div className="wrap">
            <div className="legend-container">
                <span className="score-heading">{`Score`}</span>
                <div className="legend-content">
                    <p className="score-number">{data[0].score * 100}%</p>
                    <p className="goal-text">de votre objectif</p>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    width="100%"
                    height="100%"
                    innerRadius="71%"
                    outerRadius="90%"
                    barSize={10}
                    data={data}
                    startAngle={90}
                    endAngle={450}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 1]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        minAngle={15}
                        clockWise
                        dataKey="score"
                        fill="#FF0000"
                        cornerRadius={10}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

RadialBarChartGraph.propTypes = {
    todayScore: PropTypes.number,
};

export default RadialBarChartGraph;

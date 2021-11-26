import React from 'react';
import PropTypes from 'prop-types';
import Unavailable from '../../Unavailable/Unavailable';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';

/** http://localhost:3000/user/${id}/performance
 * @type {Function} RadarChartGraph - Functional component
 * @param {array} userPerformance - value & kind.
 * @returns {ReactElement} RadarChart Graph with Recharts contain the array's data.
 * 
 * Props : Array of object 'userPerformance':
 * @typeof {array} data
 * @property {number} value
 * @property {number} kind
 */

const RadarChartGraph = ({ userPerformance }) => {
    //if data's props aren't available, return 'Unvailable' component in place of Graph
    if (!userPerformance) {
        return <Unavailable color="#fff" />;
    }
    // Duplicate array before modified array's data
    const userPerformanceArray = [...userPerformance];

    // Add a property 'activity' for each kind of object in array.
    // & reverse the order of kind for respect the design mock-up.
    const dataPerformance = userPerformanceArray.reverse().map(data => {
        switch (data.kind) {
            case 1:
                return { activity: 'Cardio', ...data };
            case 2:
                return { activity: 'Energie', ...data };
            case 3:
                return { activity: 'Endurance', ...data };
            case 4:
                return { activity: 'Force', ...data };
            case 5:
                return { activity: 'Vitesse', ...data };
            case 6:
                return { activity: 'Intensité', ...data };
            default:
                return { ...data };
        }
    });

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                data={dataPerformance}
                outerRadius={window.innerWidth > 1340 ? '70%' : '60%'}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="activity"
                    stroke="#fff"
                    tickLine={false}
                    tickSize={10}
                    fontSize={12}
                />
                <Radar
                    dataKey="value"
                    fill="rgb(255, 1, 1)"
                    fillOpacity={0.7}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};

RadarChartGraph.propTypes = {
    userPerformance: PropTypes.array,
};

export default RadarChartGraph;

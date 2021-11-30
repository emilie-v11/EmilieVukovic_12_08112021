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
import { dataPerformanceFormat } from '../../../services/format/userPerformanceFormat';

/**
 * RadarChartGraph with Recharts contain the array's data
 * @param {array} userPerformance - value & kind.
 * @returns {ReactElement} RadarChart
 */
const RadarChartGraph = ({ userPerformance }) => {
    //if data's props aren't available, return 'Unvailable' component in place of Graph
    if (!userPerformance) {
        return <Unavailable color="#fff" />;
    }
    // Duplicate array before modified array's data
    const userPerformanceArray = [...userPerformance];

    // Format the data'userPerformance for the requested format's design
    const data = dataPerformanceFormat(userPerformanceArray);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                data={data}
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

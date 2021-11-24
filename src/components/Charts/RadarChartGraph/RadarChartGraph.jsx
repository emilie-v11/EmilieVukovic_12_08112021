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

const RadarChartGraph = ({ userPerformance }) => {
    
    if (!userPerformance) {
        return <Unavailable color="#fff" />;
    }

    const userPerformanceArray = [...userPerformance];

    const dataPerformance = userPerformanceArray.reverse().map(value => {
        switch (value.kind) {
            case 1:
                return { activity: 'Cardio', ...value };
            case 2:
                return { activity: 'Energie', ...value };
            case 3:
                return { activity: 'Endurance', ...value };
            case 4:
                return { activity: 'Force', ...value };
            case 5:
                return { activity: 'Vitesse', ...value };
            case 6:
                return { activity: 'Intensité', ...value };
            default:
                return { ...value };
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
    dataPerformance: PropTypes.array,
};

export default RadarChartGraph;

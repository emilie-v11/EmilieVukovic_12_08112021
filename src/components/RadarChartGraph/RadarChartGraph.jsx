import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';
import './RadarChartGraph.css';

const RadarChartGraph = ({ userPerformance }) => {
    console.log(userPerformance);

    const dataPerformance = userPerformance.map(value => {
        switch (value.kind) {
            case 1:
                return { activity: 'Intensité', ...value };
            case 2:
                return { activity: 'Vitesse', ...value };
            case 3:
                return { activity: 'Force', ...value };
            case 4:
                return { activity: 'Endurance', ...value };
            case 5:
                return { activity: 'Energie', ...value };
            case 6:
                return { activity: 'Cardio', ...value };
            default:
                return { ...value };
        }
    });

    return (
        <ResponsiveContainer width="100%" height="100%" padding={10}>
            <RadarChart
                cx="50%"
                cy="50%"
                padding={0}
                data={dataPerformance}
                outerRadius={window.innerWidth > 1340 ? '70%' : '60%'}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="activity"
                    stroke="#fff"
                    tickLine={false}
                    tickSize="10"
                    fontSize="12"
                    // tick={customTick}
                />
                <Radar
                    name="Mike"
                    dataKey="value" // "A"
                    fill="rgb(255, 1, 1)"
                    fillOpacity={0.7}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default RadarChartGraph;

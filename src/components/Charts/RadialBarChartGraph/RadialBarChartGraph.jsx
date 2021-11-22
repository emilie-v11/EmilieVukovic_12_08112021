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

const RadialBarChartGraph = ({ todayScore }) => {
    if (!todayScore) {
        return <Unavailable color="#74798c" />;
    }

    const data = [
        {
            score: todayScore,
            // scorePercentage: todayScore * 100,
            // fill: '#FF0000',
        },
    ];

    return (
        <div className="wrap">
            <div className="legend-container">
                <span className="score-heading">{`Score`}</span>
                <div className="legend-content">
                    <p className="score-number">{todayScore * 100}%</p>
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
                    // innerRadius="60%"
                    // outerRadius="85%"
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
                        // dataKey="scorePercentage"
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

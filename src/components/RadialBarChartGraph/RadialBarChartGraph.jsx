import React from 'react';
import PropTypes from 'prop-types';
import './RadialBarChartGraph.css';
import {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
} from 'recharts';

const RadialBarChartGraph = ({ todayScore }) => {
    const data = [
        {
            score: todayScore,
            // scorePercentage: todayScore * 100,
            // scorePercentage: 1 * 100,
            fill: '#FF0000',
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
                    innerRadius="71%"
                    outerRadius="80%"
                    barSize={10}
                    data={data}
                    startAngle={80}
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
                        // dataKey="scorePercentage"
                        dataKey="score"
                        cornerRadius={50}
                        clockWise
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

RadialBarChartGraph.propTypes = {
    todayScore: PropTypes.number,
};

RadialBarChartGraph.defaultProps = {
    todayScore: 0,
};

export default RadialBarChartGraph;

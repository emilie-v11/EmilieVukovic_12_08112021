import React from 'react';
import PropTypes from 'prop-types';
import './RadialBarChartGraph.css';
import {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    Legend,
} from 'recharts';

const RadialBarChartGraph = ({ todayScore }) => {
    console.log(todayScore);

    const data = [
        {
            scorePercentage: todayScore * 100,
            // scorePercentage: 1 * 100,
            fill: '#FF0000',
        },
    ];

    // const ContentLegend = () => {
    //     return (
    //         <div className="legend-container">
    //             <span
    //                 // style={
    //                 //     {
    //                 // position: 'absolute',
    //                 // top: '20px',
    //                 // left: '20px',
    //                 // fontSize: '1rem',
    //                 // fontWeight: '500',
    //                 // width: '100%',
    //                 // height: '100%',
    //                 // }
    //                 // }
    //                 className="score-heading"
    //             >{`Score`}</span>
    //             <div
    //                 className="legend-content"
    //                 // style={{
    //                 //     textAlign: 'center',
    //                 //     verticalAlign: 'center',
    //                 //     width: '60%',
    //                 //     display: 'flex',
    //                 //     flexDirection: 'column',
    //                 //     justifyContent: 'center',
    //                 //     alignItems: 'center',
    //                 //     // width: '100%',
    //                 //     // height: '100%',
    //                 //     translate: '5% 80%',
    //                 //     // lineHeight: '24px',
    //                 // }}
    //             >
    //                 <span
    //                     className="score-number"
    //                     // style={{ fontSize: '26px', fontWeight: 700 }}
    //                 >
    //                     {todayScore * 100}%
    //                 </span>
    //                 <br />
    //                 <span
    //                     className="goal-text"
    //                     // style={{
    //                     //     fontWeight: 500,
    //                     //     color: '#848A9A',
    //                     //     width: '50%',
    //                     // }}
    //                 >
    //                     {`de votre objectif`}
    //                 </span>
    //             </div>
    //         </div>
    //     );
    // };

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
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        minAngle={15}
                        dataKey="scorePercentage"
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

export default RadialBarChartGraph;

import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';
import './RadarChartGraph.css';

// function customTick({ payload, x, y, textAnchor, stroke, radius }) {
//     return (
//         <g class="recharts-layer recharts-polar-angle-axis-tick">
//             <text
//                 stroke="#fff"
//                  tickLine={false}
//                 dataKey="activity"
//                 cx="300"
//                 cy="250"
//                 orientation="outer"
//                 radius="150"
//                 fill="#fff"
// fontSize = '12';
//                 x="300"
//                 y="92"
//                 class="recharts-text recharts-polar-angle-axis-tick-value"
//                 text-anchor="middle"
//             >
//                 <tspan x="300" dy="1em">
//                     {payload.activity}
//                 </tspan>
//             </text>
//         </g>
//     );
// }

const RadarChartGraph = ({ userPerformance }) => {
    console.log(userPerformance);

    const dataPerformance = userPerformance.map(value => {
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

    // const data = [
    //     {
    //         activity: 'Intensité',
    //         value: 200,
    //     },
    //     {
    //         activity: 'Vitesse',
    //         value: 240,
    //     },
    //     {
    //         activity: 'Force',
    //         value: 80,
    //     },
    //     {
    //         activity: 'Endurance',
    //         value: 80,
    //     },
    //     {
    //         activity: 'Energie',
    //         value: 220,
    //     },
    //     {
    //         activity: 'Cardio',
    //         value: 110,
    //     },
    // ];

    return (
        <ResponsiveContainer width="100%" height="100%" padding={10}>
            <RadarChart
                cx="50%"
                cy="50%"
                padding={0}
                // outerRadius={75}
                // data={data}
                data={dataPerformance}
                // width="70%"
                // height="60%"
                outerRadius={window.innerWidth > 1340 ? '70%' : '60%'}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="activity" //"kind"
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

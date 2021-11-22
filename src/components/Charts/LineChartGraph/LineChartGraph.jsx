import React from 'react';
import PropTypes from 'prop-types';
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    YAxis,
} from 'recharts';
import './LineChartGraph.css';
import Unavailable from '../../Unavailable/Unavailable';

const LineChartGraph = ({ userAverageSessions }) => {
    if (!userAverageSessions) {
        return <Unavailable color="#fff" />;
    }

    const userAverageSessionsArray = [...userAverageSessions];

    const prevday = {
        day: 0,
        sessionLength: 0,
    };
    const nextday = {
        day: 8,
        sessionLength: 100,
    };
    userAverageSessionsArray.unshift(prevday);
    userAverageSessionsArray.push(nextday);

    const dataAverageSessions = userAverageSessionsArray.map(sessionLength => {
        switch (sessionLength.day) {
            case 0:
                return { firstLetterDay: '', ...sessionLength };
            case 1:
                return { firstLetterDay: 'L', ...sessionLength };
            case 2:
                return { firstLetterDay: 'M', ...sessionLength };
            case 3:
                return { firstLetterDay: 'M', ...sessionLength };
            case 4:
                return { firstLetterDay: 'J', ...sessionLength };
            case 5:
                return { firstLetterDay: 'V', ...sessionLength };
            case 6:
                return { firstLetterDay: 'S', ...sessionLength };
            case 7:
                return { firstLetterDay: 'D', ...sessionLength };
            case 8:
                return { firstLetterDay: '', ...sessionLength };
            default:
                return { ...sessionLength };
        }
    });

    const CustomToolTip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <span className="customTooltip-content">
                    {`${payload[0].value} min`}
                </span>
            );
        }
        return null;
    };

    return (
        <div className="wrap">
            <span className="averageSessions-heading">
                {`Durée moyenne des sessions`}
            </span>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={dataAverageSessions}
                    margin={{ top: -30, right: -20, left: -20, bottom: -30 }}
                >
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.8)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ stroke: '#FF0000', r: 5, strokeWidth: 0 }}
                    />
                    <XAxis
                        dataKey="firstLetterDay"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fill: '#fff',
                            fontSize: '12',
                            dy: -35,
                            opacity: '0.7',
                        }}
                    />
                    <YAxis
                        dataKey="sessionLength"
                        domain={[-40, 'dataMax + 60']}
                        hide={true}
                    />
                    <Tooltip
                        content={<CustomToolTip />}
                        position={{ y: 120 }}
                        wrapperStyle={{
                            color: '#000',
                            background: '#fff',
                            fontSize: '8px',
                            padding: '7px',
                        }}
                        cursor={{
                            stroke: 'rgba(0, 0, 0, 0.1)',
                            strokeWidth: 80,
                            position: 'right',
                        }}
                        allowEscapeViewBox={{ x: false, y: false }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

LineChartGraph.propTypes = {};

export default LineChartGraph;

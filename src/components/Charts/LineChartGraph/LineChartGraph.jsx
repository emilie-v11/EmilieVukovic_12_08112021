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
import { dataAverageSessionsFormat } from '../../../services/format/userAverageSessionsFormat';

/**
 * LineChartGraph with Recharts contain the array's data.
 * @param {array} userAverageSessions - day & sessionLength of each day of the week.
 *
 * @returns {ReactElement} LineChart
 */

const LineChartGraph = ({ userAverageSessions }) => {
    //if data's props aren't available, return 'Unvailable' component in place of Graph
    if (!userAverageSessions) {
        return <Unavailable color="#fff" />;
    }

    // Duplicate array before modified array's data
    const userAverageSessionsArray = [...userAverageSessions];

    // Format the data'userAverageSessions for the requested format's design
    const data = dataAverageSessionsFormat(userAverageSessionsArray);

    /** Customize the Tooltip with content
     * @param {boolean} active - if active, display the tooltip
     * @param {object} payload - The source data of the content to be displayed in the tooltip.
     * @returns {ReactElement}
     */
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
                    data={data}
                    margin={{ top: -30, right: -20, left: -20, bottom: -30 }}
                >
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.6)"
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
                            strokeWidth: 62,
                            position: 'right',
                        }}
                        allowEscapeViewBox={{ x: false, y: false }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

LineChartGraph.propTypes = {
    userAverageSessions: PropTypes.array,
};

export default LineChartGraph;

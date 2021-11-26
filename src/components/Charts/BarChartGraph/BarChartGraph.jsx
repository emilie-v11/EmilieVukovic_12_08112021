import React from 'react';
import PropTypes from 'prop-types';
import './BarChartGraph.css';
import Unavailable from '../../Unavailable/Unavailable';
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from 'recharts';

/** 
 // http://localhost:3000/user/${id}/activity
 * @description BarChart Graph with Recharts contain the array's data.
 * @type {Function} BarChartGraph - Functional component
 * @param {array} userActivity - weight & calories of each day of the week.
 * @returns {ReactElement} BarChart
 *
 // Props : Array of object 'userActivity':
 * @typedef {Object} Sessions
 * @property {string} day
 * @property {number} kilogram
 * @property {number} calories
 */

const BarChartGraph = ({ userActivity }) => {
    //if data's props aren't available, return 'Unvailable' component in place of Graph
    if (!userActivity) {
        return <Unavailable />;
    }

    // Duplicate array before modified array's data
    const userActivityArray = [...userActivity];

    /** Change the type of 'day', for the requested format's design. ("2020-07-01" => 1), keep just the day's data (dd) & without the first useless zero.
     * @param {array.object} userActivityArray
     * @returns {array.object} newData
     */
    // create new empty array
    const newData = [];
    // loop in every object of the array 'userActivityArray'
    for (let datum of userActivityArray) {
        // Remove '-' & changes the date's type, string => number. the useless zero disapear. 01 => 1, 02 => 2 ...
        const [yyyy, mm, dd] = datum.day.split('-').map(Number); //other method : .map(x => +x)

        // Push the modified data in the 'newData' array and add the other data not modified.
        newData.push({
            //day: dd, // for keep it in Number format
            day: `${dd}`, // or for keep it in string format
            kilogram: datum.kilogram,
            calories: datum.calories,
        });
    }

    /** Customize the Tooltip with content
     * @param {boolean} active - if active, display the tooltip
     * @param {object} payload - The source data of the content to be displayed in the tooltip.
     * @returns {ReactElement}
     */
    const CustomToolTip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="custom-tooltip-text">{`${payload[0].value}kg`}</p>
                    <p className="custom-tooltip-text">{`${payload[1].value}kCal`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="wrap">
            <div className="Legend-Container">
                <h2 className="BarChart-heading">Activité quotidienne</h2>
            </div>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <BarChart
                    data={newData}
                    margin={{ top: 110, right: 48, bottom: 32, left: 48 }}
                    barGap={8}
                    barCategoryGap="35%"
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        style={{ border: '1px solid #DEDEDE', opacity: 0.6 }}
                    />
                    <XAxis
                        dataKey="day"
                        dy={16}
                        padding={{ left: -48, right: -48 }}
                        stroke="#9b9eac"
                        tickLine={false}
                        tick={{ fontSize: 14, fontWeight: 500 }}
                    />
                    <YAxis
                        orientation="right"
                        dataKey="kilogram"
                        domain={['dataMin - 1', 'dataMax + 1']}
                        allowDecimals={false}
                        dx={45}
                        stroke="#9b9eac"
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        yAxisId="cal"
                        dataKey="calories"
                        domain={[0, 'dataMax + 50']}
                        hide={true}
                    />
                    <Tooltip
                        content={<CustomToolTip />}
                        position={{ y: 80 }}
                        cursor={{ strokeWidth: 55 }}
                    />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        style={{
                            position: 'absolute',
                            top: '0px',
                            color: '#74798c ',
                        }}
                        iconType="circle"
                        iconSize="7"
                    />
                    <Bar
                        name="Poids (kg)"
                        dataKey="kilogram"
                        maxBarSize={8}
                        fill="#2b2d30"
                        radius={[50, 50, 0, 0]}
                    />
                    <Bar
                        yAxisId="cal"
                        name="Calories brûlées (kCal)"
                        dataKey="calories"
                        maxBarSize={7}
                        fill="#E60000"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

BarChartGraph.propTypes = {
    userActivity: PropTypes.array,
};

export default BarChartGraph;

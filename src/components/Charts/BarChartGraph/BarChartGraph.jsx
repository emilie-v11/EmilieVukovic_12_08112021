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

const BarChartGraph = ({ userActivity }) => {
    const userActivityArray = [...userActivity];
    // console.log(userActivityArray);

    if (!userActivity) {
        return <Unavailable />;
    }

    // const newData = userActivityArray.map(datum => ({
    //     number: userActivityArray.indexOf(datum) + 1,
    //     ...datum,
    // }));
    // console.log(newData);

    const newData = [];
    for (let datum of userActivityArray) {
        const [yyyy, mm, dd] = datum.day.split('-');
        console.log('prev', userActivityArray);

        newData.push({
            // day: `${dd}/${mm}`,
            day: `${dd}`,
            kilogram: datum.kilogram,
            calories: datum.calories,
        });
    }

    console.log('post', newData);

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
                        // stroke={{ color: "#dedede" }}
                        style={{ border: '1px solid #DEDEDE', opacity: 0.6 }}
                    />
                    <XAxis
                        // dataKey="number"
                        dataKey="day"
                        dy={16}
                        padding={{ left: -48, right: -48 }}
                        stroke="#9b9eac"
                        tickLine={false}
                        tick={{ fontSize: 14, fontWeight: 500 }}
                    />
                    <YAxis
                        orientation="right"
                        // yAxisId="kg"
                        dataKey="kilogram"
                        domain={['dataMin - 1', 'dataMax + 1']}
                        allowDecimals={false}
                        dx={45}
                        stroke="#9b9eac"
                        axisLine={false}
                        tickLine={false}
                        // padding={{top: 50,}}
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

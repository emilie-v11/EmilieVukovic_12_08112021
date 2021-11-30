/**
 * Format userAverageSessions' data for LineChartGraph component
 * dataAverageSessionsFormat
 * @param {array} array
 * @returns {array.object} firstLetterDay, day, sessionLength
 */
export const dataAverageSessionsFormat = arrayAverage => {
    // Add 2 data at first & last place to array to reach the horizontal border of the graphic as requested on the design mock-up
    const prevDay = {
        day: 0,
        sessionLength: 0,
    };
    const nextDay = {
        day: 8,
        sessionLength: 100,
    };

    // return prevDay in first place of the array
    arrayAverage.unshift(prevDay);
    // return nextDay in last place of the array
    arrayAverage.push(nextDay);

    // Add a property 'firstLetterDay' @type {string} for letters in bottom of graph
    const array = arrayAverage.map(data => {
        switch (data.day) {
            case 0:
                return { firstLetterDay: '', ...data };
            case 1:
                return { firstLetterDay: 'L', ...data };
            case 2:
                return { firstLetterDay: 'M', ...data };
            case 3:
                return { firstLetterDay: 'M', ...data };
            case 4:
                return { firstLetterDay: 'J', ...data };
            case 5:
                return { firstLetterDay: 'V', ...data };
            case 6:
                return { firstLetterDay: 'S', ...data };
            case 7:
                return { firstLetterDay: 'D', ...data };
            case 8:
                return { firstLetterDay: '', ...data };
            default:
                return { ...data };
        }
    });
    return array;
};

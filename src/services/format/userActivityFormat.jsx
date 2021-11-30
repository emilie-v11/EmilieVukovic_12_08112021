/**
 * Change the type of 'day', for the requested format's design. ("2020-07-01" => 1), keep just the day's data (dd) & without the first useless zero.
 * dataActivityFormat
 * @param {array<object>} userActivityArray
 *
 * @returns {array<object>} newData
 */
export const dataActivityFormat = array => {
    // create new empty array
    const newData = [];
    // loop in every object of the array 'userActivityArray'
    for (let datum of array) {
        // Remove '-' & changes the date's type, string => number. the useless zero disapear. 01 => 1, 02 => 2 ...
        const [yyyy, mm, dd] = datum.day.split('-').map(Number); //other method : .map(x => +x)

        // Push the modified data in the 'newData' array and add the other data not modified.
        newData.push({
            //day: dd, // for keep it in Number format
            day: `${dd}`, // or for keep it in string format
            fullDate: `${dd}/${mm}/${yyyy}`, // store the full date, but not use here
            kilogram: datum.kilogram,
            calories: datum.calories,
        });
    }
    return newData;
};

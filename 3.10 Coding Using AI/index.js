// Coding using AI tools
/*Task: Building a Time tracking application for freelancers,
// Building this app, we may need a function that receives daily works hours for a certain week and returns
1. Total hourse worked
2. Average daily hourse
3. The day with the most hourse worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hourse or more)
*/
function analyzeWorkWeek(hours) {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    // 1. Total hours worked
    const totalHours = hours.reduce((sum, h) => sum + h, 0);

    // 2. Average daily hours
    const averageHours = totalHours / hours.length;

    // 3. Day with the most hours worked
    const maxHours = Math.max(...hours);
    const busiestDay = days[hours.indexOf(maxHours)];

    // 4. Number of days worked
    const daysWorked = hours.filter(h => h > 0).length;

    // 5. Full-time check (35 hours or more)
    const isFullTime = totalHours >= 35;

    return {
        totalHours: Number(totalHours.toFixed(1)),
        averageHours: Number(averageHours.toFixed(1)),
        busiestDay,
        daysWorked,
        isFullTime
    };
}

// Example
const weekHours = [8, 7.5, 6, 9, 8, 4, 0];

console.log(analyzeWorkWeek(weekHours));
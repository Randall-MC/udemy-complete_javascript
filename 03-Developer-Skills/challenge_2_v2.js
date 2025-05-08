// Remember, we're gonna use strict mode in all scripts now!
"use strict";

///////////////////////////////////////////////
// Coding Challenge #2
/* 
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns and object:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

function analyzeWorkWeek(hours) {
  if (!Array.isArray(hours) || hours.length !== 7) {
    throw new Error(
      "Input should be an array with 7 numeric values representing daily work hours."
    );
  }

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const totalHours = hours.reduce((sum, h) => sum + h, 0);
  const daysWorked = hours.filter((h) => h > 0).length;
  const averageDailyHours = Math.trunc((totalHours / 7) * 10) / 10;
  const maxHours = Math.max(...hours);
  const maxDay = days[hours.indexOf(maxHours)];
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

// Example usage:
const workWeek = [8, 7, 5, 9, 6, 0, 4];
console.log(analyzeWorkWeek(workWeek));

const workWeek2 = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(analyzeWorkWeek(workWeek2));

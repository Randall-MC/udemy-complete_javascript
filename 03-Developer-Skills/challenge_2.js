// Remember, we're gonna use strict mode in all scripts now!
"use strict";

///////////////////////////////////////////////
// Coding Challenge #2
/* 
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

/* 
----- 1. Understanding the Problem 
Create a function that receives an array which contains the daily work hours for a certain week

----- 2. Divide and conquer
- Get total hours worked
- Get average
- Get the day with the most hours worked
- Get the number of days worked (ignore days with 0 hours worked)
- Get if the week was full-time (worked 35 hours or more)

----- 3. Do some research, don't be silly

----- 4. Write pseudocode before you write the real one
*/

const hoursWorked = function (hours) {
  // Compute the total hours worked
  const totalHours = hours.reduce((acc, value) => acc + value);
  // Compute average
  const averageHours = totalHours / hours.length;
  // Compute max
  // const mostHours = hours.reduce((acc, value) => Math.max(acc, value));

  let dayMostHours = 0;
  let mostHours = hours[0];
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > mostHours) {
      mostHours = hours[i];
      dayMostHours = i;
    }
  }

  switch (dayMostHours) {
    case 0:
      dayMostHours = "Monday";
      break;
    case 1:
      dayMostHours = "Tuesday";
      break;
    case 2:
      dayMostHours = "Wednesday";
      break;
    case 3:
      dayMostHours = "Thursday";
      break;
    case 4:
      dayMostHours = "Friday";
      break;
    case 5:
      dayMostHours = "Saturday";
      break;
    case 6:
      dayMostHours = "Sunday";
      break;
    default:
      console.log("Ingrese un valor válido");
      break;
  }
  // Compute total days worked
  let validDays = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > 0) {
      validDays++;
    }
  }
  // Compute if it was a full-time week
  const isFullTime = totalHours > 35 ? true : false;

  const str = `
  - Total hours worked: ${totalHours}
  - Average daily hours ${averageHours}
  - The day with the most hours worked was ${dayMostHours} with ${mostHours} hours
  - Number of days worked: ${validDays}
  - ${isFullTime ? "It was a full-time week" : "It wasn't a full time week"}`;

  return str;
};

const testData1 = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const testData2 = [7.5, 8, 6.5, 0, 8.5, 4, 9];

console.log(hoursWorked(testData1));
console.log(hoursWorked(testData2));

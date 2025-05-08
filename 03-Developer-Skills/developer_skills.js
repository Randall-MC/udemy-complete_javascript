"use strict";
// PROBLEM 1
/* We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error." */
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: Difference between highest and lowest temp
// - How to compute max and min temperature?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temperatures) {
  let maxTemp = temperatures[0];
  let minTemp = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > maxTemp) maxTemp = currentTemp;
    if (currentTemp < minTemp) minTemp = currentTemp;
  }
  console.log(`Max temperature: ${maxTemp}`);
  console.log(`Min temperature: ${minTemp}`);

  console.log("Amplitude");
  return maxTemp - minTemp;
};

// Test
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
// Function should receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (temperatures1, temperatures2) {
  const temps = temperatures1.concat(temperatures2);

  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > maxTemp) maxTemp = currentTemp;
    if (currentTemp < minTemp) minTemp = currentTemp;
  }
  console.log(`Max temperature: ${maxTemp}`);
  console.log(`Min temperature: ${minTemp}`);

  console.log("Amplitude");
  return maxTemp - minTemp;
};

// Test
const amplitudeNew = calcTempAmplitudeNew(
  [12, 2, 22, 43],
  [-2, -14, 25, 58, 0]
);
console.log(amplitudeNew);

// ---------- Debugging Process ----------
//  We need to do some measurements in Kelvin
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "Celsius",
    // ----- C) Fix
    // Correct the bug
    value: Number(prompt("Degrees Celsius")),
  };

  // console.log(measurement);
  // ----- B) Find
  // Isolating where exactly the bus is happening in code
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// ----- A) Identify
// Becoming aware that there is a bug
console.log(measureKelvin());
// ----- D) Prevent
// Preventing it from happening again

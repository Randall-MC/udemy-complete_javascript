'use strict';
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
*/

/* To Do
1. Get data from DOM
2. Process data to make apply the correct format
3. Show data in console
*/

// Create elements in the DOM
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Select the elements in the DOM
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

// Get data from textarea and process it
button.addEventListener('click', () => {
  // Store variable names
  const strVariables = textarea.value;
  // Normalize data
  const normalized = normalize(strVariables);

  // Convert to Camel Case
  const camelCased = camelCase(normalized);

  // Format string to show it in the console
  for (let i = 0; i < camelCased.length; i++) {
    console.log(camelCased[i].padEnd(20, ' ') + '✅'.repeat(i + 1));
  }
});

// Normalize data function
const normalize = function (strData) {
  const lowerCase = strData.toLowerCase();
  const splitted = lowerCase.split('\n');
  const trimmed = [];
  for (const value of splitted) {
    trimmed.push(value.trim());
  }

  return trimmed;
};

// Format to Camel Case
const camelCase = function (arrVariables) {
  // Regular expression
  const regex = /^[a-zA-Z0-9]+_[a-zA-Z0-9]+$/;
  // Split variable names
  const splittedVariables = [];
  for (const variable of arrVariables) {
    // Validate if the variable name meets the requirements (a_b)
    if (regex.test(variable)) {
      splittedVariables.push(variable.split('_'));
    }
  }
  // Transform to upper case the first letter of the second word
  const upperCased = [];
  for (let [first, second] of splittedVariables) {
    second = second.replace(second[0], second[0].toUpperCase());
    // Store them into the upperCased Array
    upperCased.push([first, second].join(''));
  }

  return upperCased;
};

'use strict';

// split() and join()
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Exercise: Capitalizing a name
const capitalizeName = function (name) {
  // Divide the entire name in units (words)
  const splitName = name.split(' ');
  // Create a new array that stores the units with the first letter capitalized
  const splitNameUpper = [];

  for (const word of splitName) {
    // Create a new string with the first letter capitalized and push it to splitNameUpper Array
    // splitNameUpper.push(word[0].toUpperCase() + word.slice(1));
    splitNameUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  // Returns a new name (string)
  return splitNameUpper.join(' ');
};

console.log(capitalizeName('jessica ann smith davis'));

// Padding
const message = 'Got to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));

// Exercise: Use "pad" methods to mask the initial characters of a given credit card
const maskCreditCard = function (number) {
  // Convert to string
  // const str = String(number);
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4532651498));
console.log(maskCreditCard('4532651498'));

// Repeat
const message2 = 'Bad weather... All departures DELAYED... ';
console.log(message2.repeat(5));

// Exercise: Simulate that due to the bad weather there are now many planes waiting in line for takeoff
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(12);

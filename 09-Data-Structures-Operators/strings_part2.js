'use strict';

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
// Challenge: Create a function that receives a name and returns the name but with the first letter capitalized
function capitalizeName(name) {
  const nameLower = name.toLowerCase();
  const firstLetter = name[0].toUpperCase();
  const correctName = firstLetter + nameLower.slice(1);
  return correctName;
}

console.log(capitalizeName('jOnAS'));
console.log(capitalizeName('AlDAir'));

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// Challenge: Create a function that receives two strings and compares if they are the same
function areTheSame(original, compare) {
  return console.log(original === compare);
}

areTheSame(email, normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

// Regular expression
// The 'g' stand up for global
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('Part of the NEW Airbus family');

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed on board');
  else console.log('Welcome aboard!');
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and a camera');
checkBaggage('Got some snacks and a gun for protection');

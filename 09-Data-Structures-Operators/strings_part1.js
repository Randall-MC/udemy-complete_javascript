'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

// Get the character at the N position
console.log(plane[0]);
console.log('B737'[0]);
// Get the size of the string
console.log(plane.length);
console.log('B737'.length);
// Get the first X occurrence
console.log(airline.indexOf('r'));
// Get the last X occurrence
console.log(airline.lastIndexOf('r'));
// Search an entire word
console.log(airline.indexOf('Portugal'));

// Slice method
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(4));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😁');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

'use strict';

const flight = 'LH123';
const Jonas = {
  name: 'Jonas Schmetdmann',
  passport: 1221122121,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1221122121) {
    console.log('Checked In');
  } else {
    console.log('Wrong passport');
  }
};

checkIn(flight, Jonas);
console.log(flight);
console.log(Jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = Jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(Jonas);
checkIn(flight, Jonas);

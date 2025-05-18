'use strict';

console.log(this);

// "this" is undefined in function expressions
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

// "this" doesn't exists in arrow functions, so uses the parents scope
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1989);

// "this" in objects became the object that called it
const Jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
Jonas.calcAge();

const Matilda = {
  year: 2017,
};
Matilda.calcAge = Jonas.calcAge;
Matilda.calcAge();

const f = Jonas.calcAge;
f();

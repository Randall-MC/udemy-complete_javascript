'use strict';

// var firstName = 'Matilda';

const Jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1: Preserve this inside the function
    // const self = this; // self or that
    // const isMillennial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2: Preserve "this" using an arrow function
    const isMillennial = () => {
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillennial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
Jonas.greet();
Jonas.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 7, 6);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

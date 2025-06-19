'use strict';

// Normal syntax
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE - Immediately Invoked Function Expression
(function () {
  console.log('This will never run again');
  const inPrivate = 23;
})();

// Cannot access to variables inside of functions
// console.log(isPrivate);

// arrow function
(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);

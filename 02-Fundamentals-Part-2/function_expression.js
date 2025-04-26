"use strict";
// ---------- Function Declarations vs Function Expression ----------
// Function Declarations: When use the "function" key word, also they have hoisting, so they can be called before defined
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
// Function Expression: Is a function without name which is also called an anonymous function
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

'use strict';
/* ---------- Hoisting ----------*/
// Calling variables before declaration
console.log(me);
// console.log(job); // Temporal Dead Zone (TDZ)
// console.log(year);
var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

// Calling Functions before declaration
console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  // Temporal Dead Zone (TDZ)
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted!');
}

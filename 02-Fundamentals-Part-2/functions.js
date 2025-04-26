"use strict";
// ---------- Functions ----------
// Declaring / Defining a function
function logger() {
  console.log("My name is function");
}
// Calling / Running / Invoking a function
logger();
logger();
logger();
// This are called Parameters when declare a function, is a placeholder
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
// Here are called Arguments, when invoke the function, is the actual value
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

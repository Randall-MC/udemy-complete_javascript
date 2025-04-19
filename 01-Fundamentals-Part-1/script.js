/* JavaScript Fundamentals - Part 1 */
/* // ---------- Values and Variables ----------
// Print values in the console
console.log(40 + 8 + 43 - 10);
console.log("Jonas");
console.log(23);

// Declaring variables and assign them a value
let js = "amazing";
let firstName = "Jonas";
console.log(firstName);
// You can use underscore and dollar sign to call variables
let jonas_matilda = "jm";
let $function = 27;
// Camel case naming convention
let myFirstJob = "Programer";
let myCurrentJob = "Teacher"; */

/* // ---------- Data Types ----------
// There are seven primitives data types
// number, string boolean, undefined, null, symbol and big int
let javascriptIsFun = true;
console.log(javascriptIsFun);
// typeof operator
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");
// Dynamic typing
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); */

/* // ---------- Let, Const and Var ----------
// Use let when you know the variable can reassign it's value. It's value "mutated"
let age = 30;
age = 31;
// Use const when a value in the variable cannot change. It is an immutable variable
const birthYear = 1991;
// birthYear = 1992;

// You can't declare a const variable without assign it a value
// const job;

// var is the old way to declare variables
var job = "Programer";
job = "Teacher";

// You can create variables without use the reserved key words var, let or const
firstName = "Alejandro";
console.log(firstName); */

/* // ---------- Basic Operators ----------
//  Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmamn";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // <, >, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

// Operators Precedence
console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); */

/* // ---------- Strings and Templates Literals ----------
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + " ,a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);
console.log(
  "String with \n\
  multiple \n\
  lines"
);

console.log(`String with
  multiple
  lines`); */

/* // ---------- If / else statements ----------
const age = 15;

if (age >= 18) {
  console.log("Sarah can star driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years ✌️`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century); */

/* // ---------- Type Conversion and Coercion ----------
// Type conversion is when we manually convert from one type to another
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN); // Not a Number

console.log(String(23), 23);
// Type Coercion is when JavaScript automatically converts types
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("22" * "2");
console.log("22" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n); */

/* // ---------- Truthy and Falsy values ----------
// In JavaScript exists 5 Falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
} */

/* // ---------- Equality operators ----------
// == vs ===
const age = "18";
if (age === 18) console.log("You just became an adult :D (Strict)");
if (age == 18) console.log("You just became an adult :D (Loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also an amazing number!");
} else if (favorite === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("Why not 23?"); */

/* // ---------- Logical Operators ----------
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive ...");
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive ...");
} */

/* // ---------- Switch statement ----------
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
    break;
}

// Homework
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
} */

/* // ---------- Statements and Expressions ----------
// Expression: It's an expression because produce a value
3 + 4;
1991;
true && false && !false;
// Statement: It doesn't produce a value by itself, it performs some actions
if (23 > 10) {
  const str = "23 is bigger";
} */

// ---------- The Conditional (Ternary) Operator ----------
const age = 23;
// age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

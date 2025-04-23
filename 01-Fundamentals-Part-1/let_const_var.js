// ---------- Let, Const and Var ----------
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
console.log(firstName);

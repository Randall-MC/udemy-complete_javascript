/* JavaScript Fundamentals - Part 1 */
// Assignments:
// ---------- Values and variables -----
const country = "Mexico";
const continent = "America";
let population = "130";
console.log(country);
console.log(continent);
console.log(population);

// ---------- Data Types ----------
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// ---------- Let, Const and Var ----------
language = "spanish";

// ---------- Basic Operators ----------
console.log(population / 2);

console.log(++population);

const FinlandPopulation = 6;
const averagePopulation = 33;
console.log(population > FinlandPopulation);
console.log(population > averagePopulation);
const description =
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " people speak " +
  language;
console.log(description);

// --------- Strings and Templates Literals ----------
const descriptionTemplate = `${country} is in ${continent}, and it's ${population} people speak ${language}`;
console.log(descriptionTemplate);

// ---------- If / else statements ----------
if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s is ${averagePopulation - population} million below`
  );
}

// ---------- Type Conversion and Coercion ----------
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // '617'
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// ---------- Equality operators ----------
const numNeighbors = Number();
// prompt("How many neighbor counties does your country have?")

if (numNeighbors === 1) {
  console.log("Only 1 border");
} else if (numNeighbors > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

// ---------- Logical Operators ----------
if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// ---------- Switch statement ----------
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place un number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

// ---------- The Conditional (Ternary) Operator ----------
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);

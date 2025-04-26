"use strict";
// ---------- Functions ----------
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
// Data Test
const descPortugal = describeCountry("Portugal", 10, "Lisbon");
// const descGermany = describeCountry("Germany", 83, "Berlin");
// const descFinland = describeCountry("Finland", 6, "Helsinki");
console.log(descPortugal);
// console.log(descGermany);
// console.log(descFinland);

// ---------- Function Declarations vs Function Expression ----------
const worldPopulation = 7900; // Million
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};
// Data test
const perPortugal1 = percentageOfWorld1(10);
const perChina2 = percentageOfWorld2(1441);
console.log(perPortugal1, perChina2);

// ---------- Arrow Functions ----------
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;
const perUSA3 = percentageOfWorld1(332);
console.log(perUSA3);

// ---------- Functions calling other Functions ----------
function describePopulation(country, population) {
  const perCountry = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${perCountry}`;
  console.log(description);
}
// Data test
console.log(describePopulation("China", 1441));
// describePopulation('China', 1441);
// describePopulation("Portugal", 10)
// describePopulation('USA', 332);

// ---------- Introduction to Arrays ----------
const populations = [1441, 10, 332, 83];
console.log(
  populations.length === 4 ? "It has 4 elements" : "Doesn't have 4 elements"
);

const percentages = [
  percentageOfWorld2(populations[0]),
  percentageOfWorld2(populations[1]),
  percentageOfWorld2(populations[2]),
  percentageOfWorld2(populations[3]),
];
console.log(percentages);

// ---------- Basic Array Operations (Methods) ----------
const neighbors = ["country1", "country2", "country3"];
neighbors.push("Utopia");
neighbors.pop();

if (!neighbors.includes("Germany"))
  console.log("Probably not a central european country :D");

neighbors[neighbors.indexOf("country1")] = "Country 1";

console.log(neighbors);

// ---------- Introduction to Objects ----------
const myCountry = {
  country: "Mexico",
  capital: "Ciudad de Mexico",
  language: "Spanish",
  population: 130, // Million
  neighbors: ["United States", "Belize", "Guatemala"],
  // neighbors: [],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    this.isIsland = !Boolean(this.neighbors.length);
  },
};

// ---------- Dot vs Bracket Notation ----------
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);

// ---------- Object Methods ----------
console.log(myCountry.describe());

myCountry.checkIsland();
console.log(myCountry.isIsland);

// ---------- Iteration: The for Loop ----------
for (let voter = 1; voter <= 5; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// ---------- Looping Arrays, Breaking and Continuing ----------
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);

// let errors;
// for (let compare = 0; compare < percentages2.length; compare++) {
//   errors = 0;
//   if (percentages2[compare] !== percentages[compare]) {
//     errors++;
//   }
// }

// console.log(errors);

// console.log(
//   errors > 0
//     ? "There are differences between the arrays"
//     : "There are no errors"
// );

// ---------- Looping Backwards and Loops in Loops ----------
const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors.length; i++) {
  for (let y = 0; y < listOfNeighbors[i].length; y++) {
    console.log(`Neighbor: ${listOfNeighbors[i][y]}`);
  }
}

// ---------- The while Loop ----------
const percentages3 = [];
let counter = 0;
while (counter < populations.length) {
  const perc = percentageOfWorld1(populations[counter]);
  percentages3.push(perc);
  counter++;
}
console.log(percentages3);

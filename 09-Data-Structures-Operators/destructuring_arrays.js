'use strict';
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// Retrieving elements without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring an Array
const [x, y, z] = arr;
console.log(x, y, z);
// Skipping elements that we don't want
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// Switching the position of the elements (Example without destructuring)
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

/* Mutating data */
// Switching the value between the variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Destructuring nested array (array inside of array) -> Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested // Skipping the second value
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values for destructuring values
const [o = 1, p = 1, q = 1] = [9];
console.log(o, p, q);

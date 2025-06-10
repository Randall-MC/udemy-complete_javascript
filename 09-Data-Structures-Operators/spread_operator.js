'use strict';
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicious pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}`
    );
  },
};

// Copying the elements of the arr to badNewArr using the hardcode way
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// Now, copying the individuals values of the arr into newArr using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
// Example: Both are the same
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// The spread operator takes all the elements from the array and it also doesn't create new variables.
// And as a consequence, we can only use it in places where we would otherwise write values separated by commas.

/*
===== Important uses of Spread Operator:
1. Create Shallow copies of arrays
2. Merge two arrays together
*/
// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

/* Note */
// We can't do is to build a string using a template literal
// Because this is not a place that expects multiple values separated by a comma
// console.log(`${...str} Schmedtmann`);

// Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

// Passing the arguments (ingredients array) to the function
// passing one by one
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// Using spread operator
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

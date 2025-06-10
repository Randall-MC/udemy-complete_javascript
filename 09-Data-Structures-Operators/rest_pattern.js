'use strict';
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`Main ingredient: ${mainIngredient}`);
    console.log(`Other ingredients: ${otherIngredients}`);
  },
};

/* ===== Destructuring ===== */
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
// REST, because on LEFT side of =
const [a, b, ...otherElements] = [1, 2, 3, 4, 5];
console.log(a, b, otherElements);

// Rest pattern should be the last element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

/* ===== Functions ===== */
// Rest parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 4, 2);
add(5, 3, 4, 2, 4, 9, 6);

const x = [1, 2, 3, 4];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

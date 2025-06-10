'use strict';
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

restaurant.numGuests = 0;
// When we set the "numGuests" = 0, JavaScript will assign 10 because 0 is a falsy value
const guests = restaurant.numGuests || 10;
console.log(guests);

// Works with the concept with the nullish values instead of falsy values
// Nullish values: null and undefined
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

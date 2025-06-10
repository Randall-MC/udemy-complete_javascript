'use strict';
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`Main ingredient: ${mainIngredient}`);
    console.log(`Other ingredients: ${otherIngredients}`);
  },
};

/* ===== Logical Operators can:
- Use ANY data type
- Return ANY data type
- Short-circuiting (Short Circuit Evaluation)
 */

/* ----- OR Operator ----- */
console.log('----- OR -----');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

/* ----- AND Operator ----- */
console.log('----- AND -----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');

/* The OR operator will return the first truthy value of all the operands or the last value if all of them are falsy */
// Use the OR operator to set default values

/* The AND operator will return the first falsy value or the last value if all of them are truthy */
// Use the AND operator to execute the second operand if the firs one is true

'use strict';
// Sets are a Collection of unique values, so can never have any duplicates
// Syntax
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
// Order of the elements in the set is irrelevant
// This works because strings are iterables
console.log(new Set('Jonas'));

/* ---------- Methods ----------*/
// ----- size
console.log(ordersSet.size);
// ----- has()
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
// ----- add()
ordersSet.add('Garlic Bread');
// It will be added once
ordersSet.add('Garlic Bread');
// ----- delete()
ordersSet.delete('Risotto');
// ----- clear() (empty the array)
// ordersSet.clear();

console.log(ordersSet);

/* 
Note:

In set there are no indexes, and there is no way of getting values out of the set, i.e.:

console.log(ordersSet[0]);
*/

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter'];
// Converting a Set in an Array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter']).size);

console.log(new Set('jonasschmedtmann').size);

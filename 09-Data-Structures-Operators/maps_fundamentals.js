'use strict';
// Map is a data structure that we can use to map values to keys

// Big difference between objects and maps
// In maps, the keys can have any type

// Syntax
const restaurant = new Map();

// ---------- Methods
// ----- set()
// adds or updates an entry in this map with a specified key and a value.
restaurant.set('name', 'Classico Italiano');
restaurant.set(1, 'Firenze, Italy');
// Not only update the map, also returns the map
console.log(restaurant.set(2, 'Lisbon, Portugal'));
// Chaining methods
restaurant
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :C');

// ----- get()
// returns a specified element from this map. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.
console.log(restaurant.get('name'));

// Example
const time = 8;
console.log(
  restaurant.get(
    time > restaurant.get('open') && time < restaurant.get('close')
  )
);

// ----- has()
// returns a boolean indicating whether an element with the specified key exists in this map or not.
console.log(restaurant.has('categories'));

// ----- delete()
// removes the specified element from this map by key.
restaurant.delete(2);

// ----- clear()
// removes all elements from this map.
// restaurant.clear();

// ---------- Properties
// ----- size
// returns the number of elements in this map.
console.log(restaurant.size);

// Exercise
// 1
const arr = [1, 2];
restaurant.set(arr, 'Test');
console.log(restaurant.get(arr));
// 2
restaurant.set(document.querySelector('h1'), 'Heading 1');

console.log(restaurant);

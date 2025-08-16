'use strict';

// Creating new arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = new Array(1, 2, 3, 4, 5, 6, 7);
// This creates a new array with seven empty spaces
const arr3 = new Array(7);
console.log(arr3);
// It can't be filled with map()
console.log(arr3.map(() => 5));
// In order to filled, use the fill() method
arr3.fill(1, 3, 5);
console.log(arr3);

arr.fill(23, 2, 6);
console.log(arr);

// Creating arrays programmatically
const arr4 = Array.from({ length: 7 }, _ => 1);
console.log(arr4);

const arr5 = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(arr5);

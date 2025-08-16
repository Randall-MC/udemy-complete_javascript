'use strict';

const arr = [23, 11, 64];
// Getting an element at position n
console.log(arr[0]);
console.log(arr.at(0));
// Getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
// console.log(arr[-1]);
// Also works on strings
console.log('Jonas'.at(0));
console.log('Jonas'.at(-1));

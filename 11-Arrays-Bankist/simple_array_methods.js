'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];
// slice
console.log('---------- slice() ----------');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
console.log('------------------------------');
// splice
console.log('---------- splice() ----------');
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
console.log('------------------------------');

// reverse
console.log('---------- reverse() ----------');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // mutated
console.log('------------------------------');

// concat
console.log('---------- concat() ----------');
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
console.log('------------------------------');

// join
console.log('---------- join() ----------');
console.log(letters.join(' - '));
console.log('------------------------------');

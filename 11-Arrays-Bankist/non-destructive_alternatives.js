'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Original array
console.log('Original: ', movements);
// toRevered()
const reversedMovements = movements.toReversed();
console.log('toReversed(): ', reversedMovements);
// Original array
console.log('original: ', movements);

// There is also a non-destructive version fon sort() and splice()
// toSorted()
// toSpliced()

// If you want to change a value inside the array
// movements[1] = 2000;

const newMovements = movements.with(1, 2000);

// New array
console.log('new: ', newMovements);
// Original array
console.log('original: ', movements);

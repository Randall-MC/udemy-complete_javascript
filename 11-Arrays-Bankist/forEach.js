'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for of loop
console.log('---------- for of loop ----------');
for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('------------------------------');

// for each loop
console.log('---------- for each loop ----------');
movements.forEach(function (mov, i, arr) {
  // console.log('arr: ' + arr);
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
console.log('------------------------------');

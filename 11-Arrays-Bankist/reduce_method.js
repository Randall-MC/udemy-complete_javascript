'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// acc -> accumulator
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// Get Maximum Value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

const max = movements.reduce(
  (acc, max) => (acc > max ? acc : max),
  movements.at(0)
);
console.log(max);

'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //////////////////////////////
// The new "findLast" and "findLastIndex" methods
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

// 'Your latest large movement was X movements ago"
const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 1000
);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);

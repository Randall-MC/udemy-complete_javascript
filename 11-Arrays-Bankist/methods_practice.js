// Strict mode
'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Array Methods Practice
// Exercise 1
/* How much has been deposited in total in the bank */
const bankDepositSum = accounts
  .flatMap(account => account.movements)
  .filter(movement => movement > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log('Exercise 1:', bankDepositSum);
/* Exercise 2
Count how many deposits there have been in the bank with at least $1000 */

// const numDeposits1000 = accounts
//   .flatMap(account => account.movements)
//   .filter(acc => cur > 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log('Exercise 2:', numDeposits1000);

/* Exercise 3:
Create an object which contains the sume of the deposits and of the withdrawals
*/
const { deposits, withdrawals } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (acc, cur) => {
      // cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
      acc[cur >= 0 ? 'deposits' : 'withdrawals'] += cur;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log('Exercise 3:', 'Deposits:', deposits, 'Withdrawals:', withdrawals);

/* Exercise 4:
Create a function that converts any string to a title case.
Example:
this is a nice title -> This Is a Nice Title 
*/

const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

const toTitleCase = function (string) {
  const temporal = string
    .toLowerCase()
    .split(' ')
    .map((word, index) =>
      !exceptions.includes(word) || index === 0
        ? word[0].toUpperCase() + word.slice(1)
        : word
    )
    .join(' ');
  return temporal;
};

console.log('Exercise 4:');
console.log(toTitleCase('this is a nice title'));
console.log(toTitleCase('this is a LONG title but not too long'));
console.log(toTitleCase('and here is another title with an EXAMPLE'));
// const string = 'String';
// console.log(string[0]);

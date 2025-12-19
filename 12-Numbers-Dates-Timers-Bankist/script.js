'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movements[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const movementDate = `${day}/${month}/${year}`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
        ${i + 1} ${type}
        </div>
        <div class="movements__date">${movementDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// //////////////////////////////////////////////////
// ////////// Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// ------------
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    // format that we want day/month/year
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = now.getHours();
    const min = now.getMinutes();

    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// console.log(23 === 23.0);
// // Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333
// // Base 2 - 0 1
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false
// // Convert strings to numbers
// console.log(Number('23'));
// console.log(+'23');
// // Parsing
// // Integers
// console.log(Number.parseInt('23px', 10));
// console.log(Number.parseInt('ab23'));
// // Floating
// console.log(Number.parseFloat('2.5rem'));
// // Checking if value is NaN
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));
// // Checking if value is a floating number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(23 / 0));
// // Checking if value is a integer number
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isFinite('23'));
// console.log(Number.isFinite(23 / 0));
// // Some Number methods (Math space)
// // Square root
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// // Cubic root
// console.log(8 ** (1 / 3));
// // Max value
// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '23', 11, 2));
// console.log(Math.max(5, 18, '23px', 11, 2));
// // Min value
// console.log(Math.min(5, 18, '23', 11, 2));
// // Some constants (Math space)
// // Calculating the area of a circle
// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// // random function
// console.log(Math.trunc(Math.random() * 6) + 1);

// ////////// Creating a function that generates a random number between two given numbers
const randomInt = (min, max) => {
  // This give a number between 0 and 1.99999
  // Math.random() * 2;
  // We can take out the decimal part, that means we only get two numbers, 0 and 1
  // Math.floor(Math.random() * 2);
  // Now we can make it dynamic using the two arguments passed in the function
  // Math.floor(Math.random() * (max - min + 1));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// console.log(randomInt(10, 20));
// console.log(randomInt(0, 3));

// ////////// Rounding integers
// console.log('---------- trunc ----------');
// console.log(Math.trunc(23.3));
// console.log(Math.trunc(23.8));
// console.log(Math.trunc(-23.3));
// console.log(Math.trunc(-23.8));
// console.log('---------- floor ----------');
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.8));
// console.log(Math.floor(-23.3));
// console.log(Math.floor(-23.8));
// console.log('---------- ceil ----------');
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.8));
// console.log(Math.ceil(-23.3));
// console.log(Math.ceil(-23.8));
// console.log('---------- round ----------');
// console.log(Math.round(23.3));
// console.log(Math.round(23.8));
// console.log(Math.round(-23.3));
// console.log(Math.round(-23.8));

// ////////// Rounding decimals
// console.log('---------- (1.123).toFixed ----------');
// console.log((1.123).toFixed(0));
// console.log((1.123).toFixed(2));
// console.log(+(1.123).toFixed(2));

// ////////// Reminder Operator %
// console.log(5 / 2);
// console.log(5 % 2); // 5 = 2 * 2 + 1
// console.log(8 / 3);
// console.log(8 % 3); // 8 = 3 * 2 + 2
// // Even numbers (0, 2, 4, 6, 8, 10). Even numbers are divisible by two, the reminder is 0
// console.log(6 % 2);
// // Odd numbers (1, 3, 5, 7, 9). Odd numbers are the opposite
// console.log(7 % 2);
// const isEven = n => n % 2 === 0;
// console.log(isEven(2));
// console.log(isEven(654));
// console.log(isEven(234));

// ////////// Practice exercise reminder operator
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = 'orangered';
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = 'blue';
//     }
//   });
// });

// ////////// Numeric separators
// 287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter);
// // the underscore gives different meaning
// const price = 345_99;
// console.log(price);
// const transferFee1 = 15_00;
// const transferFee2 = 1_500;
// Not allowed
// const PI = 3.1415;
// console.log(Number('230_000'));
// console.log(parseInt('230_000'));

// ////////// BigInt
// Maximum int number
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// Bigger numbers than the MAX_SAFE_INTEGER lose precision
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);
// Syntax
// console.log(5468989613216545465468987986542n);
// console.log(BigInt(5468989613216545465468987986542));
// Operations
// console.log(10000n + 10000n);
// console.log(1234567889123n * 2n);
// Exceptions
// const huge = 789456123789n;
// const num = 3;
// console.log(huge * num); // Not allowed
// console.log(huge * BigInt(num));
// Exceptions with logical operations
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == 20);
// Exceptions with strings
// console.log(huge + 'Is really big Int');
// Exceptions with numbers
// console.log(Math.sqrt(16n));
// Divisions
// console.log(10n / 3n);
// console.log(10 / 3);

// ////////// Creating dates
// Actual date
// const now = new Date();
// console.log(now);
// Parsing strings
// console.log(new Date('Aug 10 2020 18:05:41'));
// console.log(new Date('August 10, 2021'));
// console.log(new Date(account1.movements[0]));
// Parsing numbers
// console.log(new Date(2022, 7, 10, 8, 30, 55));
// Unix time
// console.log(new Date(0));
// Convert days to milliseconds
// For example, 3 days:
// 3 Days, each day has 24 hours, each hour has 60 minutes, each minute has 60 seconds, times 1000 to convert in milliseconds
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// Working with dates (methods)
// const future = new Date(2026, 7, 10, 12, 30, 49);
// console.log(future);
// console.log('Year', future.getFullYear());
// console.log('Month (Zero base -1)', future.getMonth()); // Zero base
// console.log('Month day', future.getDate()); // Day of the month
// console.log('Week Day', future.getDay()); // Day of the week
// console.log('Hours', future.getHours());
// console.log('Minutes', future.getMinutes());
// console.log('Seconds', future.getSeconds());
// // console.log("Year", future.getMilliseconds());
// // International Standard (ISO)
// console.log(future.toISOString());
// // Get the timestamp. Timestamp is the milliseconds have passed since January 1, 1970
// console.log(future.getTime());
// // How to get a date given a timestamp
// console.log(new Date(future.getTime()));
// // ///// IMPORTANT: Get a timestamp for right now
// console.log(Date.now());
// // Setters for all get methods
// future.setFullYear(2027);
// console.log(future);

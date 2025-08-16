'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

// Display movements history
const displayMovements = function (movements, sort = false) {
  // Delete test movements
  containerMovements.innerHTML = '';
  // Sort Movements
  const sortMovements = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;
  // Create every movement in the array
  sortMovements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // Template string
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;
    // Add element into movements
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// ---------- ---------- ----------

// Calc and display the actual balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
// ---------- ---------- ----------

// Calculate the total incomings, outgoings  and the interest
const calcDisplaySummary = function (acc) {
  // Incoming
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, deposit) => acc + deposit, 0);
  labelSumIn.textContent = `${incomes}€`;
  // Outgoing
  const outgoings = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, outgoing) => acc + outgoing, 0);
  labelSumOut.textContent = `${Math.abs(outgoings)}€`;
  // Interest
  const interests = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    // The bank will only pay interests when the amount be greater than one
    .filter(interest => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interests}€`;
};
// ---------- ---------- ----------

// Creating user's name (map)
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
//  ---------- ---------- ----------

// Current Account
let currentAccount;
//  ---------- ---------- ----------

// Update: Displayed movements, balance and the summary
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};
//  ---------- ---------- ----------

// Login Button Event Listener
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  // Check if the account exist and retrieve the object
  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );
  // Check if the pin is the same
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Update UI
    updateUI(currentAccount);
  }
});
//  ---------- ---------- ----------

// Transfer Money Button Event Listener
btnTransfer.addEventListener('click', function (e) {
  // Prevent Default Behavior
  e.preventDefault();
  // Getting the Amount and the name of the transfer
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    /* Validate if the amount is greater than 0,
    if the receiver exists
    if the balance is greater than the amount
    and if receiver is not the actual user */
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
    // Clear input fields
    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferTo.blur();
  }
});
//  ---------- ---------- ----------

// Request a loan
btnLoan.addEventListener('click', function (e) {
  // Prevent default
  e.preventDefault();
  // Getting the requested amount
  const amount = Number(inputLoanAmount.value);
  // Validate if can proceed with the loan
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  // Clear the input field
  inputLoanAmount.value = '';
});
//  ---------- ---------- ----------

// Delete Account Button Event Listener
btnClose.addEventListener('click', function (e) {
  // Prevent default form behavior
  e.preventDefault();
  // Compare if the USER and PIN are correct
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // Search the index of the current user
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Delete the account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  // Clear input fields
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});
//  ---------- ---------- ----------

// Sort Movements Button Event Listener
// Variable state monitor
let sorted = false;
btnSort.addEventListener('click', function (e) {
  // Prevent default behavior
  e.preventDefault();
  // Call the movements display function
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
//  ---------- ---------- ----------

// Array from Example from lecture "174. More Ways of Creating and Filling Arrays"
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    element => Number(element.textContent.replace('€', ''))
  );

  console.log(movementsUI);

  // Other way to do it will be destructuring
  const movementsUI2 = [...document.querySelectorAll('.movements_value')];
});
//  ---------- ---------- ----------

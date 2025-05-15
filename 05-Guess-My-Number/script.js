'use strict';

// Create the secret number
let secretNumber = setSecretNumber();
// Create the score variable
let score = 20;
// Crete a variable for high score
let highScore = 0;

// Refactoring code
function setSecretNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setWidthNumber = function (width) {
  document.querySelector('.number').style.width = width;
};

const styleBGC = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// Event for the .check button when click on it
document.querySelector('.check').addEventListener('click', function () {
  // Get the number for the input .guess
  const guess = Number(document.querySelector('.guess').value);

  // When the player doesn't write a number
  if (!guess) {
    displayMessage('⛔ No number!');
    // when the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    // Change the background color and the size of the secret number
    displayNumber(secretNumber);
    setWidthNumber('30rem');
    styleBGC('#60b347');
    // Set the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When the guess is wrong
  } else if (guess !== secretNumber) {
    // Eval if the number is higher than one
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      // Decrease score
      score--;
      displayScore(score);
    } else {
      // Prevent the score from falling below zero
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

// Restart game function, get back the original values
document.querySelector('.again').addEventListener('click', function () {
  // Restore values of the score and secretNumber variables
  score = 20;
  secretNumber = setSecretNumber();
  // Restore the initial conditions of the message, number, score and guess input field
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';
  // Restore the original background color and the number with
  setWidthNumber('15rem');
  styleBGC('#222');
});

// Coding Challenge #1
/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number with (15rem)

GOOD LUCK 😁
*/

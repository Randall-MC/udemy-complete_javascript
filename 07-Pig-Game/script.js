'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Game variables
let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  // Switch playing to true
  playing = true;
  // Reset game variables
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  // Remove player--winner class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // Reset the score--# and current--# elements (DOM)
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  // Add player--active to player--0
  document.querySelector('.player--0').classList.add('player--active');
  // Hide dice
  diceEl.classList.add('hidden');
};

init();

const switchPlayer = function () {
  // Reset the current score in the DOM
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // Reset the current score here in the code
  currentScore = 0;
  // Switch the active player in the code
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Switch the player in the DOM
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Hold Button
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 15) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// Reset Button
btnNew.addEventListener('click', init);

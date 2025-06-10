'use strict';

///////////////////////////////////////
// Coding Challenge #3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// const events = new Set();
// for (const event of gameEvents.values()) {
//   events.add(event);
// }
const events = [...new Set(gameEvents.values())];

// 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// Solution 1
// for (const [time, event] of gameEvents) {
//   if (time % 9 === 0) {
//     console.log('An event happened, on average, every 9 minutos');
//   }
// }
// Solution 2
// for (let minute = 9; minute < 90; minute += 9) {
//   if (gameEvents.has(minute))
//     console.log('An event happened, on average, every 9 minutos');
// }
// Solution
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutos`
);
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽️ GOAL
for (const [minute, event] of gameEvents) {
  // let half = '';
  // if (minute < 45) {
  //   half = 'FIRST';
  // } else {
  //   half = 'SECOND';
  // }

  const half = minute <= 45 ? 'FIRST' : 'SECOND';
  let str = `[${half} HALF] ${minute}: ${event}`;
  console.log(str);
}

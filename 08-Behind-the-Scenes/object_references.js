'use strict';

const Jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(Jessica, 'Davis');

// Manually create a new object and modify the original object (reference)
// const marriedJessica = Jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before:', Jessica);
console.log('After:', marriedJessica);

const Maria = {
  firstName: 'Maria',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
// Spread operator (...)
// Shallow copy
const mariaCopy = { ...Maria };
mariaCopy.lastName = 'Davis';

// mariaCopy.family.push('Mary');
// mariaCopy.family.push('John');

// console.log('Before:', Maria);
// console.log('After:', mariaCopy);

// Deep Copy / Clone
const mariaClone = structuredClone(Maria);

mariaClone.family.push('Mary');
mariaClone.family.push('John');

console.log('Original:', Maria);
console.log('Clone:', mariaClone);

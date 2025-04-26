"use strict";
// ---------- Basic Array Operations (Methods) ----------
const friends = ["Michael", "Steven", "Peter"];

// Add Elements
// The push and unshift method also return the length of the array
friends.push("Jay"); // Add an element at the end of the array
friends.unshift("John"); // Add an element at the beginning of the array
console.log(friends);

// Remove elements
friends.pop(); // Remove the last element and return the removed element
friends.shift(); // Remove the first element and return the removed value
console.log(friends);

console.log(friends.indexOf("Peter"));
// Returns -1 when there isn't a coincidence
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Peter"));
// Returns false when there isn't a coincidence
console.log(friends.includes("Bob"));

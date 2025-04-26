// ---------- Dot vs Bracket Notation ----------
const jonas = {
  firstName: "Jonas",
  lastName: "Schemedtmann",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

// Retrieve data from an object
console.log(jonas.lastName);
console.log(jonas["lastName"]);

// You can use expression when you use brackets
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

/* const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends "
  );
} */

// Add key and values into an object
jonas.location = "Portugal";
jonas["Twitter"] = "@jonasschmedtmann";
console.log(jonas);

// Challenge
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

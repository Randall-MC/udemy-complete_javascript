// ---------- Object Methods ----------
const jonas = {
  firstName: "Jonas",
  lastName: "Schemedtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // Challenge
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());

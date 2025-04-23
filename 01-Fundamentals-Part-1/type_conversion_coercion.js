// ---------- Type Conversion and Coercion ----------
// Type conversion is when we manually convert from one type to another
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN); // Not a Number

console.log(String(23), 23);
// Type Coercion is when JavaScript automatically converts types
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("22" * "2");
console.log("22" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

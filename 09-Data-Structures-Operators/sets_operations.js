'use strict';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// ----- intersection method
// Return a new set which contains only the elements that are present in both of the sets
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection', commonFoods);
// Converting into an Array
console.log([...commonFoods]);

// ----- union method
// Will give all the elements that are present in either of the sets
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// ----- difference method
// Give us a new set which will contain all the elements that are present in the first set, but not in the second one
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference:', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference:', uniqueMexicanFoods);

// ----- symmetric difference method
// Give us all the elements that are present in either set, but not in both
const uniqueItalianMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianMexicanFoods);

// ----- isDisjointFrom()
// takes a set and returns a boolean indicating if this set has no elements in common with the given set.
console.log('isDisjointFrom:', italianFoods.isDisjointFrom(mexicanFoods));

// ----- isSubsetOf()
// Takes a set and returns a boolean indicating if all elements of this set are in the given set
console.log('isSubsetOf:', italianFoods.isSubsetOf(mexicanFoods));

// ----- isSupersetOf()
// Takes a set and returns a boolean indicating if all elements of the given set are in this set
console.log('isSupersetOf:', italianFoods.isSupersetOf(mexicanFoods));

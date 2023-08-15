const prime = require("./prime");
const primeList = require("./list");

// Define an array of test cases with different boundaries
const testCases = [
  { lower: 5, upper: 79 },
  { lower: 100129, upper: 104729},
  { lower: 982447957, upper: 982451653 }
  
];

testCases.forEach(({ lower, upper }) => {
 
  const listPrimeSubset = primeList.slice(
    primeList.indexOf(lower),
    primeList.indexOf(upper) + 1
  );

  const computedPrimes = prime.computePrime(lower, upper);

 
  const areArraysEqual = JSON.stringify(computedPrimes) === JSON.stringify(listPrimeSubset);

  console.log(`Test Case: [${lower}, ${upper}]`);
  console.log("Computed Prime:", computedPrimes);
  console.log("List Prime Subset:", listPrimeSubset);
  console.log("Are Arrays Equal:", areArraysEqual);
  console.log("-----------------------------");
});

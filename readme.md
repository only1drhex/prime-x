


# Prime-x

A simple Node.js package to check for prime numbers and also compute prime numbers within a specified range.

## Installation

You can install this package using npm:

```
npm install @drhex/prime-x@latest
```

## Usage

```javascript
const prime = require("@drhex/prime-x");
const lower = 30;
const upper = 59;
// Compute prime numbers within a specified range
const primesInRange = prime.computePrime(lower, upper);
console.log("Prime numbers:", primesInRange);
```
check if a number is a prime number.

```javascript
const prime = require("@drhex/prime-x");
const number = 97;
const isPrime = prime.checkPrime(number); //returns true
console.log("The number is a prime number:", isPrime);
```

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

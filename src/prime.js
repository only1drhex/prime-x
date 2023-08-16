function checkPrime(num) {
   num = parseInt(num);
  if(!num) return false;
// numbers less than 2 aren't prime numbers.
  if (num < 2) return false;
  if (num === 2) return true;
// Even numbers (except 2) are not prime numbers.
 if (num % 2 === 0) return false;

  let i = 3;
  const squareRoot = Math.sqrt(num);
  while (i <= squareRoot) {
    if (num % i === 0) {
      return false;
    }
    i += 2;
  }
  return true;
}

function computePrime(lower, upper) {
  const primeNumbers = [];
  if (lower === undefined) lower = 0;
  if(!upper) return [];
  for (let i = lower; i <= upper; i++) {

    if (checkPrime(i)) primeNumbers.push(i);
 
  }
  return primeNumbers;
}

module.exports = {
  checkPrime,
  computePrime,
};
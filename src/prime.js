function checkPrime(num) {
  
  switch(num){
    // 0 and 1 are not prime
    case 0:
    case 1:
      return false;
    // 2 and 3 are prime
    case 2:
    case 3:
      return true;
  }
  // Even numbers except 2 are not prime numbers
 
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
  if (!lower || lower === "undefined") lower = 0;
  if(!upper) return false;
  for (let i = lower; i <= upper; i++) {
    if (primeNumbers.length >= 1) {
      const lastIndex = primeNumbers.length - 1;
      const lastNum = primeNumbers[lastIndex];
      if (lastNum >= upper && checkPrime(upper)) return primeNumbers;
    }
    if (checkPrime(i)) primeNumbers.push(i);
  }
  return primeNumbers;
}

module.exports = {
  checkPrime,
  computePrime,
};

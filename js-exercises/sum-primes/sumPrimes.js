const range = ({ from = 0, to }) => {
  return {
    [Symbol.iterator]() {
      let i = from;
      return {
        next() {
          return {
            done: i > to,
            value: i++,
          };
        },
      };
    },
  };
};

const isPrime = (number) => {
  for (const i of range({ from: 2, to: number - 1 })) {
    if (number % i === 0) {
      return false;
    }
  }
  return number >= 2;
};

const primeGenerator = ({ from = 2, to }) => {
  return {
    [Symbol.iterator]() {
      let currPrime = from;
      let done = false;
      return {
        next() {
          for (const el of range({ from: currPrime, to: to })) {
            if (isPrime(el) && el <= to) {
              currPrime = el;
              break;
            } else if (!isPrime(el) && el >= to) {
              done = true;
              break;
            }
          }
          return {
            done: done || currPrime > to,
            value: currPrime++,
          };
        },
      };
    },
  };
};

function sumPrimes(limit) {
  let result = 0;

  if (limit < 2) {
    return result;
  }

  for (const primeNum of primeGenerator({to:limit})) {
      result += primeNum;
  }
  
  return result;
}



export {
  sumPrimes,
};

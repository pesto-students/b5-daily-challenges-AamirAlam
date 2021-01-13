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
  for (const i of range({from:2,  to: number-1 })) {
    if (number % i === 0 ){
      return false;
    }
  }
  return number >= 2;
};

function sumPrimes(limit) {
  let result = 0;
  for(const num of range({from:2, to:limit})){
    if(isPrime(num)){
      result += num;
    }
  }

  return result;
}

export {
  sumPrimes,
};

const isIterable = (obj) => {
  if (obj === null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
};

//todo: replace Error with AggregateError it's definition error resolved
const anyPromises = (promises) => {
  if (!isIterable(promises) || promises.length === 0) {
    throw new Error(`Expected iterable found ${typeof promises}`);
  }

  return new Promise((resolve, reject) => {
    const rejected = [];

    for (const pr of promises) {
      pr.then((res) => {
        console.log(res);
        resolve(res);
      }).catch((err) => {
        rejected.push(err);
        if (rejected.length === promises.length) {
          reject(new Error(rejected)); //
        }
      });
    }
  });
};

export { anyPromises };

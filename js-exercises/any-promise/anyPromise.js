const isIterable = (obj) => {
  if (obj === null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
};

function AggregateError(message = "") {
  this.message = message;
}
AggregateError.prototype = Error.prototype;

const anyPromises = (promises) => {
  if (!isIterable(promises)) {
    throw new TypeError(`Expected iterable list found non iterable object`);
  }
  promises = Array.from(promises);
  if (promises.length === 0) {
    throw new Error(`Expected iterable list found non empty list`);
  }

  return new Promise((resolve, reject) => {
    const rejected = [];

    for (const pr of promises) {
      Promise.resolve(pr)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          rejected.push(err);
          if (rejected.length === promises.length) {
            reject(new AggregateError(rejected)); //
          }
        });
    }
  });
};

export { anyPromises, AggregateError };

function rangeIter(lb, ub) {
  return {
    [Symbol.iterator]() {
      let i = lb;
      return {
        next() {
          return {
            done: i > ub,
            value: i++,
          };
        },
      };
    },
  };
}

export { rangeIter };

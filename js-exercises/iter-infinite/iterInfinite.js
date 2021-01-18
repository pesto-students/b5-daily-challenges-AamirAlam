function* generateCount(start, step) {
  while (true) {
    yield start;
    start = start + step;
  }
}

const count = (start, step = 1) => {
  if (typeof start !== "number" || start === Infinity) {
    throw TypeError(`Expected number in first argument, Found ${typeof start}`);
  }
  if (typeof step !== "number" || step === Infinity) {
    throw TypeError(`Expected number in second argument, Found ${typeof step}`);
  }
  return generateCount(start, step);
};

const cycle = () => {};

const repeat = () => {};

// console.log(count(-12, 2));
// for (const item of count(-12, 2)) {
//   if (item > 12) {
//     break;
//   }
//   console.log(item);
// }
export { count, cycle, repeat };

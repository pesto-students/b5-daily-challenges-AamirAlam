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

function* genCycle(seq) {
  for (char of seq) {
    yield char;
  }
  yield* genCycle(seq);
}

const cycle = (seq) => {
  if (typeof seq !== "string") {
    throw TypeError(`Expected number in first argument, Found ${typeof start}`);
  }
  return genCycle(seq);
};

function* genRepeatedSeq(value, repeatCount) {
  let limitRepeat = false;
  if (repeatCount !== undefined) {
    limitRepeat = true;
  }

  while (1) {
    if (limitRepeat) {
      if (repeatCount <= 0) {
        break;
      }
    }
    yield value;
    repeatCount--;
  }
}

const isPositiveNumber = (num) => {
  if (typeof num !== "number" || num < 0 || num === Infinity) {
    return false;
  }
  return true;
};

const repeat = (value, repeatCount) => {
  if (value === null || value === undefined) {
    throw TypeError(
      `Expected object of any premitive type,  found : ${typeof value}`
    );
  }
  if (!isPositiveNumber(repeatCount)) {
    throw TypeError(
      `Expected repeatCount positive number,  found : ${typeof repeatCount}`
    );
  }
  return genRepeatedSeq(value, repeatCount);
};

export { count, cycle, repeat };

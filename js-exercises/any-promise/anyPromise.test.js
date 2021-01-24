import { anyPromises, AggregateError } from "./anyPromise";

const getSuccessPromise = (delay, msg) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay, msg);
  });
};

describe("anyPromise ", () => {
  it("Should resolve the first promise resolved", async () => {
    await expect(
      anyPromises([
        getSuccessPromise(100, "quick"),
        getSuccessPromise(1000, "slow"),
        Promise.reject("reject"),
      ])
    ).resolves.toBe("quick");
  });

  it("Should resolve the only promise resolved", async () => {
    await expect(
      anyPromises([getSuccessPromise(100, "quick"), Promise.reject("reject")])
    ).resolves.toBe("quick");
  });
  it("Should resolve asynchronously  iterable contains no promises", async () => {
    await expect(anyPromises("lol")).resolves.toBe("l");
  });
  it("Should resolve asynchronously  iterable contains no promises", async () => {
    await expect(anyPromises([1, 2, 3])).resolves.toBe(1);
  });
  it("Should asynchronously rejects with an AggregateError  if all promises rejected   ", async () => {
    await expect(
      anyPromises([
        Promise.reject("reject1"),
        Promise.reject("reject2"),
        Promise.reject("reject3"),
      ])
    ).rejects.toThrow(AggregateError);
  });

  it("Should reject asynchronously  if empty array passed  ", () => {
    expect(() => anyPromises([])).toThrow(Error);
  });
  it("Should reject asynchronously  if non iterable object passed", () => {
    expect(() => anyPromises({})).toThrow(Error);
  });
  it("Should reject asynchronously  if non iterable object passed", () => {
    expect(() => anyPromises(null)).toThrow(Error);
  });
  it("Should reject asynchronously  if non iterable object passed", () => {
    expect(() => anyPromises(undefined)).toThrow(Error);
  });
  it("Should reject asynchronously  if non iterable object passed", () => {
    expect(() => anyPromises(123)).toThrow(Error);
  });
});

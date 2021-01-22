import { anyPromises } from "./anyPromise";

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
describe("anyPromise ", () => {
  it("Should resolve the first promise resolved", async () => {
    await expect(anyPromises([promise1, promise2, promise3])).resolves.toBe(
      "quick"
    );
  });

  it("Should resolve the only promise resolved", async () => {
    await expect(anyPromises([promise1, promise3])).resolves.toBe("slow");
  });

  it("Should reject asynchronously  if all promises rejected   ", async () => {
    await expect(anyPromises([promise1])).rejects.toThrow(Error);
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
  //   it("Should reject asynchronously  if string passed", () => {
  //     expect(() => anyPromises("lol")).toThrow(Error);
  //   });
});

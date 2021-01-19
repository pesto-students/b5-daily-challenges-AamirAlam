import { count, repeat, cycle } from "./iterInfinite";

describe("count function ", () => {
  it("Should return correct counts ", () => {
    const countItr = count(0, 2);
    let i = 0;
    for (const c of countItr) {
      expect(c).toEqual(i);
      i = i + 2;
      if (i > 15) {
        break;
      }
    }
  });

  it("Should throw Type Error if any of the inputs were wrong ", () => {
    expect(() => count(null)).toThrow(TypeError);
    expect(() => count(undefined)).toThrow(TypeError);
    expect(() => count([])).toThrow(TypeError);
    expect(() => count({})).toThrow(TypeError);
    expect(() => count("hello")).toThrow(TypeError);
    expect(() => count(() => {})).toThrow(TypeError);
    expect(() => count(1 / 0)).toThrow(TypeError);
  });
});

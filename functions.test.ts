const { shuffleArray } = require("./utils");
const { bots } = require("./data");

describe("shuffleArray should", () => {
  // CODE HERE
  test("return an Array", () => {
    expect(Array.isArray(shuffleArray(bots))).toBeTruthy();
  });

  test("should return only 5 cards", () => {
    expect(shuffleArray(bots).length).toEqual(bots.length);
  });
});

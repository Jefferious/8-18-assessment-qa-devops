const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("Does shuffle return an array", () => {
    expect(shuffle()).toEqual([])
  });
  test("Does it return an array the same length as the string I passed in", () => {
    expect(shuffle('Hi').length).toEqual(2)
  })
});

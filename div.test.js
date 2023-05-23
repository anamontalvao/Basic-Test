const div = require('./div');

//Write all edge cases tests for div.js function.
//Example of usage div(4,2) should be 2

test("Check if it works", () => {
    expect(div(4, 2)).toBe(2);
})
test("Check if does a division with natural numbers", () => {
    expect(div(16, 4)).toBe(4);
})
test("Check if does a not decimal division", () => {
    expect(div(7, 2)).toBe(3.5);
})
test("Check if does a negative division", () => {
    expect(div(7, -2)).toBe(-3.5);
})
test("Check if does a division per zero", () => {
    expect(div(7, 0)).toBe(Infinity);
})
test("Check if does a inverse division", () => {
    expect(div(1.665, 5.55)).toBe(0.3);
})
test("Check if does a division with big numbers", () => {
    expect(div(793548328091516928, 396774164045758460)).toBe(2);
})

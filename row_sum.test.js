const rowSum = require('./row_sum');

test('sum of first 5 odd numbers equal to 9', () => {
  expect(rowSum(5)).toBe(9);
});

test('sum of first 11 odd numbers equal to 36', () => {
  expect(rowSum(11)).toBe(36);
});

test('sum of first 15 odd numbers equal to 64', () => {
  expect(rowSum(15)).toBe(64);
});

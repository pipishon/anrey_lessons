const discount = require('./discount');

test('if price less than 50 discount 0', () => {
  expect(discount(10, 1)).toBe(0);
  expect(discount(11.5, 1)).toBe(0);
  expect(discount(0, 1)).toBe(0);
});

test('if price more than 50 discount 10', () => {
  expect(discount(55, 1)).toBe(10);
  expect(discount(238, 1)).toBe(10);
  expect(discount(100, 1)).toBe(10);
});

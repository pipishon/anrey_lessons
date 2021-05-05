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

test('if price more than 300 and quantity more than 10 discount 20', () => {
  expect(discount(450, 25)).toBe(20);
})

test('if price more than 300 and quantity less than 10 discount 15', () => {
  expect(discount(340, 5)).toBe(15);
})

test('if price more than 500 or quantity more than 50 discount 25', () => {
  expect(discount(600, 5)).toBe(25);
  expect(discount(100, 55)).toBe(25);
})

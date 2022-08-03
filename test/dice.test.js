const { Cup } = require('../easy/dice');

describe('Cup class', () => {
  let newCup = new Cup([4, 6, 10]);
  let newCup2 = new Cup([12, 10, 1]);
  test('should create instance of Cup', () => {
    expect(newCup instanceof Cup).toBe(true);
  });
  test('should create multiple unique instances', () => {
    expect(newCup === newCup2).toBe(false);
  });
});

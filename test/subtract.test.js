const subtract = require('../subtract');

test('1 - 1 = 0', () => {
    expect(subtract(1, 1)).toBe(0);
});
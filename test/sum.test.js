const sum = require('../sum');

test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('2 + 2 = 4', () => {
    expect(sum(2, 2)).toBe(4);
});

test('3 + 3 = 6', () => {
    expect(sum(3, 3)).toBe(6);
});

// Expected to fail
test('4 + 5 = 8', () => {
    expect(sum(4, 5)).toBe(8);
});
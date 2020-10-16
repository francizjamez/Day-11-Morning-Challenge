const { isModest } = require('./main');

test('Test cases', () => {
    expect(isModest(2036)).toBe(true);
    expect(isModest(2037)).toBe(true);
    expect(isModest(2038)).toBe(false);
    expect(isModest(2039)).toBe(false);
});
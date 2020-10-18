const { isModest, sortContacts } = require('./main');

test('Exercise 1 - Test cases', () => {
    expect(isModest(2036)).toBe(true);
    expect(isModest(2037)).toBe(true);
    expect(isModest(2038)).toBe(false);
    expect(isModest(2039)).toBe(false);
    expect(isModest(23)).toBe(true);
    expect(isModest(11)).toBe(false);
});

test('Exercise 2 test cases', () => {
    expect(JSON.stringify(sortContacts([
        "John Locke",
        "Thomas Aquinas",
        "David Hume",
        "Rene Descartes"
    ], "ASC"))).toBe(JSON.stringify([
        "Thomas Aquinas",
        "Rene Descartes",
        "David Hume",
        "John Locke"]));

    expect(JSON.stringify(sortContacts([
        "John Locke",
        "Thomas Aquinas",
        "David Hume",
        "Rene Descartes"
    ], "DESC"))).toBe(JSON.stringify([
        "John Locke",
        "David Hume",
        "Rene Descartes",
        "Thomas Aquinas"]));

    expect(JSON.stringify(sortContacts([
        "A B",
        "C D",
        "E F",
        "G H"
    ], "ASC"))).toBe(JSON.stringify([
        "A B",
        "C D",
        "E F",
        "G H"]));

    expect(JSON.stringify(sortContacts([
        "A B",
        "C D",
        "E F",
        "G H"
    ], "DESC"))).toBe(JSON.stringify([
        "G H",
        "E F",
        "C D",
        "A B"]));

    expect(JSON.stringify(sortContacts([
        "A B"
    ], "DESC"))).toBe(JSON.stringify([
        "A B"]));

    expect(JSON.stringify(sortContacts([
        "A B"
    ], "ASC"))).toBe(JSON.stringify([
        "A B"]));

});
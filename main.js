
function isModest(num) {

    const getAllPartitions = function (num) {
        let convert = num + "";
        let partitions = [];
        for (let i = 1; i < convert.length; i++) {

            partitions.push([convert.substr(0, i), convert.substr(i, convert.length)]);
        }
        return partitions;
    }

    let partitions = getAllPartitions(num);
    let modesty = false;
    for (const [left, right] of partitions) {
        console.log(num % right, left, right);
        if (num % right == left) {
            modesty = true;
            break;
        }
    }   
    return modesty;
}

// let test = isModest(2038);
// console.log(test);

// Exercise 2
function sortContacts(contacts, order) {

    const getLastName = function (name) {
        let lastIndex = name.indexOf(" ");
        return name.substring(lastIndex + 1, name.length);
    }

    const createLastNames = function (names) {
        let lastNames = {};
        for (let i = 0; i < contacts.length; i++) {
            lastNames[contacts[i]] = getLastName(names[i]);
        }
        return lastNames;
    }

    let lastNames = createLastNames(contacts);
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sorted = [];
    for (const letter of alphabet) {
        for (const name in lastNames) {
            if (letter == lastNames[name][0]) {
                sorted.push(name);
            }
        }
    }

    if (order === "DESC") {
        return sorted.reverse()
    }

    return sorted;
}

// let test2 = sortContacts([
//     "John Locke",
//     "Thomas Aquinas",
//     "David Hume",
//     "Rene Descartes"
// ], "ASC");

// console.log(test2);


module.exports = { isModest, sortContacts };

const sum = Array
    .from(new Array(5), (_, k) => k + 5)
    .reduce((acc, cur) => acc + cur, 0);

console.log(sum)
console.log([0, 1, 2, 3, 4].map(k => k + 5))

const names = ['Lee', 'Kim', 'Park', 'Lee', 'Kim'];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];

console.log(uniqueNamesWithSpread)

const person = {
    name: 'Lee Sun-Hyoup',
    familyName: 'Lee',
    givenName: 'Sun-Hyoup',
    company: 'Cobalt. Inc.',
    address: 'Seoul',
}

const { familyName, givenName } = person;
console.log(familyName)

const makeCompany = ({ name, address, serviceName }) => {
    return {
        name,
        address,
        serviceName
    }
};
const cobalt = makeCompany({ name: 'Cobalt. Inc.', address: 'Seoul', serviceName: 'Present' });

console.log(cobalt)

console.log(!!0)

const arr = Array.from(new Array(5), (i, k) => k + 5)
console.log(arr)

var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
console.log(myFish)
console.log(removed)

const arr4 = [1, 2, 3, 4, 5, 6];
arr4.slice(2, 3);
console.log(arr4.slice(2, 3))
console.log(arr4.length)
arr4["keys"] = 'v';
console.log(arr4.length)

for (const item of arr4) {
    console.log('..', item)
}

const obj = { name: '박상호', company: 'korea' }
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log('name' in obj)
console.log("first" in obj)

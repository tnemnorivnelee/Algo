const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/).map(Number);

// console.log(input);

const result = [];

let one = Math.round((input.reduce((acc, cur) => acc + cur, 0)) / cases);
one = Object.is(one, -0) ? 0 : one;
result.push(one);

const sortedInput = input.sort((a, b) => a - b);
// console.log('sortedInput : ', sortedInput);

const two = sortedInput[Math.floor(cases / 2)];
result.push(two);

const map = new Map();
let max = 1;
for (let i of sortedInput) {
    if (map.has(i)) {
        max = Math.max(max, map.get(i) + 1);
        map.set(i, map.get(i) + 1);
    } else {
        map.set(i, 1);
    }
}

const maxArr = [];
for (let [key, val] of map) {
    if (val === max) maxArr.push(key);
}

const three = maxArr.length === 1 ? maxArr[0] : maxArr[1];
result.push(three);

const four = Math.max(...input) - Math.min(...input);
result.push(four);


console.log(result.join('\n'));


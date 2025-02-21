const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const Ncards = input[1].split(' ').map(Number);
const Mcards = input[3].split(' ').map(Number);

let map = new Map();

Ncards.forEach(el => {
    if (map.has(el)) {
        map.set(el, map.get(el) + 1);
    } else {
        map.set(el, 1);
    }
});

let result = [];

Mcards.forEach(el => result.push(map.get(el) || 0));

console.log(result.join(' '));
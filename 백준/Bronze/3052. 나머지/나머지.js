const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let remainder = [];

for (let i = 0; i < input.length; i++) {
    remainder.push(input[i] % 42);
}

console.log([...new Set(remainder)].length);
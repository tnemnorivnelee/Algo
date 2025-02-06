const fs = require('fs');

const [size, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n');
const value = Number(input[1]);
const arr = input[0].split(' ').map(Number);

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        count++;
    }
}

console.log(count);
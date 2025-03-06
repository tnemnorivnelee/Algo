const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);


input.shift();

// console.log(input);

// 3 1 4 3 2 -> i가 걸리는 시간
// 1 2 3 4 5 -> i

// 1 2 3 3 4 -> 1 3
// 2 5 1 4 3

const arr = input[0].split(' ').map(Number).sort((a, b) => a - b);

// console.log(arr);

const result = [];
let count = 0;

for (const number of arr) {
    count += number;
    result.push(count);
}

console.log(result.reduce((acc, cur) => acc + cur));
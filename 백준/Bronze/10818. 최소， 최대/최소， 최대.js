const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);
const intArr = input[1].split(' ').map(Number);

intArr.sort((a, b) => a - b);

console.log(`${intArr[0]} ${intArr[count - 1]}`);

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const str = input[0];
const num = Number(input[1]);

console.log(str.slice(num - 1, num));

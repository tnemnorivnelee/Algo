const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const N = input[0];
const M = input[1];

console.log(Math.abs(N - M));
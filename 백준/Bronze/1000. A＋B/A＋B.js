const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

console.log(Number(input[0]) + Number(input[1]));



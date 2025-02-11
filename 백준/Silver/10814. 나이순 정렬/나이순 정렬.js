const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = input.sort((a, b) => parseInt(a) - parseInt(b)).join('\n');

console.log(result);
const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/).map(Number);

input.sort((a, b) => a - b);

let level = 0;
let count = 0;

const startIndex = Math.round(cases * 0.15);

input.splice(0, startIndex);
input.splice(input.length - startIndex, input.length);

for (let i = 0; i < input.length; i++) {
    level += input[i];
    count++;
}

console.log(cases === 0 ? level : Math.round(level / count));
const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = fs.readFileSync('../input.txt').toString().trim().split(' ');

let total = 0;

for (let i = 0; i < input.length; i++) {
    total += input[i]**2;
}

console.log(total % 10);




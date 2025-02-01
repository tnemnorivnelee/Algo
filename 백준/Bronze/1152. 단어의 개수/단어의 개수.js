const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let count = 0;

for (let i = 0; i < input.length; i++) {
    if (Number(isNaN(input[i]))) {
        count++;
    }
}

console.log(count);
const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const line1 = input[0].split(' ').map(x => Number(x));
const line2 = input[1].split(' ').map(x => Number(x));

let result = "";

for (let i = 0; i <= line1[0]; i++) {
    if (line2[i] < line1[1]) {
        result += String(line2[i]) + " ";
    }
}

console.log(result);
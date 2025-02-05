const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num1 = Number(input[0]);
let num2 = Number(input[1]);

while (num1 % num2 !== 0) {
    let n = num1 % num2;

    if (n !== 0) {
        num1 = num2;
        num2 = n;
    }
}

console.log(num2);
console.log((Number(input[0]) * Number(input[1])) / num2);


const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

let value = 666;
let count = 1;

while (count < input) {
    value++;
    if (value.toString().includes('666')) {
        count++;
    }
}

console.log(value);
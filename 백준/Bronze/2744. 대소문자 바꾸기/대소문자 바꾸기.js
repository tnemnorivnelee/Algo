const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('');

for (let i = 0; i < input.length; i++) {
    if (65 <= input[i].charCodeAt(0) && input[i].charCodeAt(0) <= 90) {
        input[i] = input[i].toLowerCase();
    } else if (97 <= input[i].charCodeAt(0) && input[i].charCodeAt(0) <= 122) {
        input[i] = input[i].toUpperCase();
    }
}

console.log(input.join(''));
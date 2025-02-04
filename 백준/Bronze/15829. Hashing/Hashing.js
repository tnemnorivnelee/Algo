const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const L = input[0];
const str = input[1];

const converter = (alphabet) => {
    return `${alphabet}`.charCodeAt(0) - 96;
}

let result = 0;

for (let i = 0; i < L; i++) {
    result += converter(str.charAt(i)) * (31 ** i);
}


console.log(result % 1234567891);

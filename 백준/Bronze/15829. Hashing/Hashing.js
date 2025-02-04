const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const L = input[0];
const str = input[1];
const M = 1234567891;
let r = 1;

let result = 0;

for (let i = 0; i < L; i++) {
    result += (str.charCodeAt(i) - 96) * r;
    result = result % M;
    r = r * 31;
    r = r % M;
}


console.log(result);

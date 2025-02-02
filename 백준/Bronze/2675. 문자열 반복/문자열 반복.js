const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = "";

for (let i = 1; i <= Number(input[0]); i++) {
    const count = Number(input[i].split(' ')[0]);
    const str = input[i].split(' ')[1];

    for (let j = 0; j < str.length; j++) {
        for (let k = 0; k < count; k++) {
            result += str[j];
        }
    }
    result += '\n';
}

console.log(result);
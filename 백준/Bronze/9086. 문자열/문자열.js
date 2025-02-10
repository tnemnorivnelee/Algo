const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < cases; i++) {
    if (input[i].includes('\r')) {
        input[i] = input[i].replace('\r', '');
    }
    console.log(`${input[i].charAt(0)}${input[i].charAt(input[i].length - 1)}`)
}


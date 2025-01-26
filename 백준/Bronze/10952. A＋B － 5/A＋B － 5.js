const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    const arr = input[i].split(' ').map(x => parseInt(x));
    const result = arr[0] + arr[1];

    if (result !== 0) {
        console.log(result);
    }
}
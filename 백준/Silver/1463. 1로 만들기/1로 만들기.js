const fs = require('fs');

let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const arr = [0, 0];

let i = 2;

while (i <= input) {
    arr[i] = arr[i - 1] + 1;
    if (i % 3 === 0) {
        arr[i] = Math.min(arr[i], arr[i / 3] + 1);
    }
    if (i % 2 === 0) {
        arr[i] = Math.min(arr[i], arr[i / 2] + 1);
    }
    i++;
}

console.log(arr[input]);
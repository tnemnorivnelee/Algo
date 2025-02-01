const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const result = String(input[0] * input[1] * input[2]).split('');

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < arr.length; i++) {
    if (result[i] === '0') {
        arr[0]++;
    } else if (result[i] === '1') {
        arr[1]++;
    } else if (result[i] === '2') {
        arr[2]++;
    } else if (result[i] === '3') {
        arr[3]++;
    } else if (result[i] === '4') {
        arr[4]++;
    } else if (result[i] === '5') {
        arr[5]++;
    } else if (result[i] === '6') {
        arr[6]++;
    } else if (result[i] === '7') {
        arr[7]++;
    } else if (result[i] === '8') {
        arr[8]++;
    } else if (result[i] === '9') {
        arr[9]++;
    }
}

for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}
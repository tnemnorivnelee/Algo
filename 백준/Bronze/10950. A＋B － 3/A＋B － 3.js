const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


for (let i = 0; i < input[0]; i++) {
    let arr = [];
    arr[i] = input[i + 1].split(' ').map(x => Number(x));
    arr.splice(i, 1, arr[i][0] + arr[i][1]);
    console.log(arr[i]);
}





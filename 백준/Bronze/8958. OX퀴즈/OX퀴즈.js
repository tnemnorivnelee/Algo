const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

let arr = [];

for (let i = 1; i <= count; i++) {
    const abc = input[i].split('X').filter(item => item.includes('O'));
    arr.push(abc);
}

for (let i = 0; i < arr.length; i++) {
    let score = 0;
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            if (arr[i][j].charAt(k) === 'O') {
                score += k + 1;
            }
        }
    }
    console.log(score);
}
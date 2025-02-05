const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const score = input[1].split(' ').map(Number);
let M = Math.max(...score);

score.forEach((value, index, array) => {
    array[index] = value / M * 100;
})


const newScore = score.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(newScore / N);

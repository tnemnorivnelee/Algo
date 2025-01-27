const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numArr = input.map(item => Number(item));
const strArr = numArr.map(item => String(item));

console.log(numArr[0] + numArr[1] - numArr[2]);
console.log(strArr[0] + strArr[1] - strArr[2]);
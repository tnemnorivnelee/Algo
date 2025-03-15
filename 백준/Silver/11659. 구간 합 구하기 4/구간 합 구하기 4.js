const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

// console.log(input);

const numArr = input[1].split(' ').map(Number);

numArr.unshift(0);

// console.log(numArr);

for (let i = 1; i < numArr.length; i++) {
    // console.log(numArr[i]);
    numArr[i] = numArr[i] + numArr[i - 1];
}

// console.log(numArr);

const result = [];

for (let i = 2; i < input.length; i++) {
    // console.log(input[i]);
    const [start, end] = input[i].split(' ').map(Number);
    // console.log(start, end);

    result.push(numArr[end] - numArr[start - 1]);
}

console.log(result.join('\n'));
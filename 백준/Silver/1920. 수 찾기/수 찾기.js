const fs = require('fs');

const [N, arrN, M, arrM] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numSet = new Set(arrN.split(' ').map(Number));
const queryNums = arrM.split(' ').map(Number);

let result = [];

for (const queryNum of queryNums) {
    result.push(numSet.has(queryNum) ? 1 : 0);
}

console.log(result.join('\n'));
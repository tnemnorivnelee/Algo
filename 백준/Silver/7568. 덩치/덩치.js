const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// console.log(cases);
// console.log(input);
// (x, y) / x = 몸무게, y = 키

const result = new Array(Number(cases)).fill(1);

for (let i = 0; i < Number(cases); i++) {
    const [iWeight, iHeight] = input[i].split(' ').map(Number);
    for (let j = 0; j < Number(cases); j++) {
        const [jWeight, jHeight] = input[j].split(' ').map(Number);
        if (i !== j && iWeight < jWeight && iHeight < jHeight) {
            result[i]++;
        }
    }
}

console.log(result.join(' '));




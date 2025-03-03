const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const [K, N] = cases.split(' '); // K = 이미 있는 개수, N = 필요한 개수
const LAN = input.map(Number);

// console.log(K, N);
// console.log(LAN);

let left = 1;
let right = Math.max(...LAN);
let result = 0;

while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    let count = 0;

    for (let i = 0; i < K; i++) {
        count += Math.floor(LAN[i] / middle);
    }

    // console.log(count);

    if (count < N) {
        right = middle - 1;
    } else {
        result = middle;
        left = middle + 1;
    }
}

console.log(result);

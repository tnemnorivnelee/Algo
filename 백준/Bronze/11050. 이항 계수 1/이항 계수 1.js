const fs = require('fs');

const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let n = 1;
let r = 1;

for (let i = N - K + 1; i <= N; i++) {
    n = n * i;
}

for (let i = 1; i <= K; i++) {
    r = r * i;
}

console.log(n / r);
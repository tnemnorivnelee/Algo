const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

for (let i = 0; i < cases; i++) {
    const k = input.shift();
    const n = input.shift();
    const arr = Array.from({length: k + 1}, () => Array(n + 1).fill(0));

    for (let j = 1; j <= n; j++) {
        arr[0][j] = j;
    }

    for (let j = 1; j <= k; j++) {
        for (let m = 1; m <= n; m++) {
            arr[j][m] = arr[j - 1][m] + arr[j][m - 1];
        }
    }
    console.log(arr[k][n]);
}
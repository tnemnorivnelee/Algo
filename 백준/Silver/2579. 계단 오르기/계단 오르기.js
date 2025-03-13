const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/).map(Number);

// console.log(input);

const dp = new Array(cases).fill(0);

// console.log(dp);

dp[0] = input[0];
dp[1] = Math.max(input[0] + input[1], input[1]);
dp[2] = Math.max(input[0] + input[2], input[1] + input[2]);


for (let i = 3; i < cases; i++) {
    dp[i] = Math.max(input[i] + input[i - 1] + dp[i - 3], input[i] + dp[i - 2]);
}

// console.log(dp);

console.log(dp[cases - 1]);
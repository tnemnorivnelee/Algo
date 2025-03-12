const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/).map(Number);

// console.log(input);

for (let i = 0; i < input.length; i++) {
    let target = input[i];

    let dp = new Array(target + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    // console.log(dp);

    for (let j = 4; j <= target; j++) {
        dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
    }
    // console.log(dp);
    console.log(dp[target]);
}
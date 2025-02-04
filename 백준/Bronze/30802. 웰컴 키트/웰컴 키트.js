const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = [];

for (let i = 0; i < input.length; i++) {
    arr.push(input[i].split(' ').map(Number));
}

const participants = arr[0][0];
const tShirts = arr[1];
const T = arr[2][0];
const P = arr[2][1];
const tShirtsTotal = tShirts[0] + tShirts[1] + tShirts[2] + tShirts[3] + tShirts[4] + tShirts[5];

// console.log(participants);
// console.log(tShirts);
// console.log(T);
// console.log(P);
// console.log(tShirtsTotal)


if (participants === tShirtsTotal) {
    let tShirtsCount = 0;

    for (let j = 0; j < tShirts.length; j++) {
        if (tShirts[j] !== 0) {
            tShirtsCount += Math.ceil(tShirts[j] / T);
        }
    }
    console.log(tShirtsCount);
    console.log(Math.floor(participants / P) + " " + participants % P);
}


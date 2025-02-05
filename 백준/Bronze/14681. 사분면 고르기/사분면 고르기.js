const fs = require('fs');

const input = fs.readFileSync(0, "utf-8").toString().split('\n').map(Number);

const x = input[0];
const y = input[1];
let n = 0;

if (x > 0 && y > 0) {
    n = 1;
} else if (x < 0 && y > 0) {
    n = 2;
} else if (x < 0 && y < 0) {
    n = 3;
} else {
    n = 4;
}

console.log(n);
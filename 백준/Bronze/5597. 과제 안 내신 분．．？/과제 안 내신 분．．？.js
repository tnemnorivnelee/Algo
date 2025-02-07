const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

for (let i = 0; i < 30; i++) {
    if (!input.includes(i + 1)) {
        console.log(i + 1);
    }
}
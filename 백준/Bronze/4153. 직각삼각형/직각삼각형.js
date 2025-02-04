const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length; i++) {
    const arr = input[i].split(' ').map(Number);

    const a = arr[0];
    const b = arr[1];
    const c = arr[2];

    if (a === 0 && b === 0 && c === 0) {
        break;
    }

    if (a**2 + b**2 === c**2) {
        console.log("right");
    } else if (b**2 + c**2 === a**2) {
        console.log("right");
    } else if (c**2 + a**2 === b**2) {
        console.log("right");
    } else {
        console.log("wrong");
    }
}

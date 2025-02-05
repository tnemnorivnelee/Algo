const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();

const N = Number(input);

const factorial = (N) => {
    if (N === 1 || N === 0) {
        return 1;
    } else {
        return N * factorial(N - 1);
    }
}

console.log(factorial(N));
const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const factorial = (value) => {
    if (value === 0) {
        return 1;
    } else {
        return BigInt(BigInt(value) * BigInt(factorial(value - 1)));
    }
};

const arr = [...factorial(Number(input)).toString()];
let result = 0;

while (true) {
    const value = arr.pop();
    if (value === '0') {
        result++;
    } else {
        break;
    }
}

console.log(result);

const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/).map(Number);

const result = [];
const stack = [];
let index = 1;

for (let i = 0; i < cases; i++) {
    const compareValue = input[i];

    while (index <= compareValue) {
        stack.push(index++);
        result.push('+');
    }

    if (stack[stack.length - 1] === compareValue) {
        stack.pop();
        result.push('-');
    } else {
        console.log('NO');
        process.exit(0);
    }
}

console.log(result.join('\n'));

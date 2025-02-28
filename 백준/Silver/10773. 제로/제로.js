const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/).map(Number);

const stack = [];

let result = 0;

input.map((el) => {
    stack.push(el);

    if (stack[stack.length - 1] === 0) {
        stack.pop();
        stack.pop();
    }
});

stack.map(el => result += el);

console.log(result);


let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const commands = input.slice(1); 

let stack = [];
let result = [];

commands.forEach(command => {
  if (command.startsWith('push')) {
    const value = parseInt(command.split(' ')[1], 10);
    stack.push(value);
  } else if (command === 'pop') {
    result.push(stack.length === 0 ? -1 : stack.pop());
  } else if (command === 'size') {
    result.push(stack.length);
  } else if (command === 'empty') {
    result.push(stack.length === 0 ? 1 : 0);
  } else if (command === 'top') {
    result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
  }
});

console.log(result.join('\n'));
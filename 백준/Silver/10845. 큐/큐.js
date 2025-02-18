const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const queue = [];
const result = [];

for (let i = 0; i < cases; i++) {

    switch (input[i]) {
        case 'pop':
            result.push(queue.length === 0 ? -1 : queue.shift());
            break;
        case 'size':
            result.push(queue.length);
            break;
        case 'empty':
            result.push(queue.length === 0 ? 1 : 0);
            break;
        case 'front':
            result.push(queue.length === 0 ? -1 : queue[0]);
            break;
        case 'back':
            result.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
            break;
        default:
            queue.push(input[i].split(' ')[1]);
            break;
    }
}

console.log(result.join('\n'));
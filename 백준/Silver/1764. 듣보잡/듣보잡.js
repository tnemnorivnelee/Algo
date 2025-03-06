const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const set = new Set(input);

const result = [];

input.forEach(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        result.push(item);
    }
});

result.sort();
result.unshift(result.length);

console.log(result.join('\n'));
const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sortedX = input.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);

const sortedY = sortedX.sort((a, b) => (
    a.split(' ')[0] === b.split(' ')[0] && a.split(' ')[1] - b.split(' ')[1]
));

console.log(sortedY.join('\n'));
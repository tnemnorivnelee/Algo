const fs = require('fs');

const [A, B] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

console.log((A + B) * (A - B));

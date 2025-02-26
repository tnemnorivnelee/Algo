const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

input.sort((a, b) => {
    const ax = Number(a.split(' ')[0]);
    const ay = Number(a.split(' ')[1]);
    const bx = Number(b.split(' ')[0]);
    const by = Number(b.split(' ')[1]);
    
    return ay === by ? ax - bx : ay - by;
});

console.log(input.join('\n'));
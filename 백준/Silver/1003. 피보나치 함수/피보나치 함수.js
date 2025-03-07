const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/).map(Number);

const fibonacci = [[1, 0], [0, 1]];

for (let i = 2; i <= Math.max(...input); i++) {
    fibonacci.push([fibonacci[i - 1][0] + fibonacci[i - 2][0], fibonacci[i - 1][1] + fibonacci[i - 2][1]]);
}


input.forEach(item => {
    console.log(fibonacci[item].join(' '));
});


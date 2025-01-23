const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = fs.readFileSync('./input.txt').toString().trim().split(' ');

if (Number(input[0]) > Number(input[1])) {
    console.log('>');
} else if (Number(input[0]) < Number(input[1])) {
    console.log('<');
} else {
    console.log('==');
}
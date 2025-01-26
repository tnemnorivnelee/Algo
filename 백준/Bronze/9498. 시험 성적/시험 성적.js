const { log } = require('console');
const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = fs.readFileSync('../input.txt').toString().trim().split(' ');


if (90 <= input[0] && input[0] <= 100) {
    console.log('A');
} else if (80 <= input[0] && input[0] <= 89) {
    console.log('B');
} else if (70 <= input[0] && input[0] <= 79) {
    console.log('C');
} else if (60 <= input[0] && input[0] <= 69) {
    console.log('D');
} else {
    console.log('F');
}
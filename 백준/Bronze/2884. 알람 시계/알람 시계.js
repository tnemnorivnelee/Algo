const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

if (input[1] >= 45) {
    console.log(`${input[0]} ${input[1] - 45}`)
} else {
    if (input[0] === 0) {
        console.log(`${23} ${input[1] + 60 - 45}`)
    } else {
        console.log(`${input[0] - 1} ${input[1] + 60 - 45}`)
    }
}
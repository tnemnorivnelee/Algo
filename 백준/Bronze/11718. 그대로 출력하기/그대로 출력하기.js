const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (const string of input) {
    console.log(string);
}
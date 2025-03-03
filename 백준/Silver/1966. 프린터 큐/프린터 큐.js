const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

let result = [];

for (let i = 0; i < input.length; i += 2) {
    let [N, M] = input[i].split(' ').map(Number);
    const doc = input[i + 1].split(' ').map(Number);
    let count = 0;
    
    while (true) {
        const max = Math.max(...doc);
        const number = doc.shift();

        if (max === number) {
            count++;
            if (M === 0) {
                result.push(count);
                break;
            }
        } else {
            doc.push(number);
        }

        if (M === 0) {
            M = doc.length - 1;
        } else {
            M--;
        }
    }
}

console.log(result.join('\n'));
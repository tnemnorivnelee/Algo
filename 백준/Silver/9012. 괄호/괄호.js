const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

for (let i = 0; i < cases; i++) {
    const VPS = input[i];
    const stack = [];
    let result = 'YES';

    for (let j = 0; j < VPS.length; j++) {
        if (VPS[j] === '(') {
            stack.push(1);
        } else {
            if (!stack.pop()) {
                result = 'NO';
                break;
            }
        }
    }

    if (stack.length !== 0) {
        result = 'NO';
    }
    console.log(result);
}

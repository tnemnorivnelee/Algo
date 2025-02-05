const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

input.forEach((item, index, array) => {
    array[index] = item.replace(/\r/g, '');
});

for (let i = 0; i < input.length; i++) {
    if (input[i] === '0') {
        break;
    }

    let len = input[i].length;

    let leftStr = input[i].slice(0, Math.floor(len / 2)).split('');
    let rightStr = input[i].slice(Math.ceil(len / 2), len).split('');


    const middle = Math.ceil(rightStr.length / 2);

    for (let j = 0; j < middle; j++) {
        if (rightStr.length === 1) {
            break;
        }
        let temp = rightStr[j];
        rightStr[j] = rightStr[middle - j];
        rightStr[middle - j] = temp;
    }

    let leftResult = "";
    let rightResult = "";

    for (let j = 0; j < rightStr.length; j++) {
        leftResult += leftStr[j];
        rightResult += rightStr[j];
    }

    if (leftResult === rightResult) {
        console.log("yes");
    } else {
        console.log("no");
    }
}



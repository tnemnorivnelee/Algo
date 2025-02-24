const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

// i 가 3과 5의 배수이면 FizzBuzz 출력
// i 가 3의 배수이면 Fizz 출력
// i 가 5의 배수이면 Buzz 출력
// 아니면 i 그대로 출력

const checkFizzBuzz = (value) => {
    if (value % 3 === 0 && value % 5 === 0) {
        return 'FizzBuzz';
    } else if (value % 3 === 0) {
        return 'Fizz';
    } else if (value % 5 === 0) {
        return 'Buzz';
    } else {
        return value;
    }
};

if (Number(input[0])) {
    const value = Number(input[0]) + 3;
    console.log(checkFizzBuzz(value));
} else if (Number(input[1])) {
    const value = Number(input[1]) + 2;
    console.log(checkFizzBuzz(value));
} else if (Number(input[2])) {
    const value = Number(input[2]) + 1;
    console.log(checkFizzBuzz(value));
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

const cards = Array.from({length: N}, (_, i) => i + 1);

let front = 0;

while (cards.length - front > 1) {
    front++;
    cards.push(cards[front]);
    front++;
}

console.log(cards[front]);
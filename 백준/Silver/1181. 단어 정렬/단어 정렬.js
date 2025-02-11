const fs = require('fs');

const [cases, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const words = input.map(item => item.replace('\r', ''));

const removedSameWords = [...new Set(words)].sort();

const sortedWords = removedSameWords.sort((a, b) => a.length - b.length);

for (const sortedWord of sortedWords) {
    console.log(sortedWord);
}

console.log("Day 1 code - Puzzle 1");

const fs = require('node:fs');
const input = fs.readFileSync('../data.txt', 'utf8');

console.log(input);
console.log(typeof input);

let floor = 0;

for (let i = 0; i < input.length; i++ ) {
    if (input[i] === '(') {
        floor++;
    } else {
        floor--;
    }
}

console.log(`floor: ${floor}`);
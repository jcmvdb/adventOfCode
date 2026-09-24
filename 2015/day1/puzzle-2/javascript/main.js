console.log("Day 1 code - Puzzle 2");

const fs = require('node:fs');
const input = fs.readFileSync('../data.txt', 'utf8');

let floor = 0;

for (let i = 0; i < input.length; i++ ) {
    if (input[i] === '(') {
        floor++;
    } else {
        floor--;
        if (floor < 0) {
            console.log(`character place: ${i + 1}`);
            break;
        }
    }
}
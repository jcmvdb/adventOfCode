console.log("Day 2 code - Puzzle 1");

// Read the file
const fs = require('fs');
const file = '../../data.txt';
const input = fs.readFileSync(file, 'utf8');

const lines = input.trim().split(/\r?\n/);
let total = 0;

lines.forEach(line => {
    const [length, width, height] = line.split('x').map(Number);
    // You need to know the following thing
    const numArray = [length, width, height];
    numArray.sort(function(a, b){return a-b});
    const ribbon = numArray[0] + numArray[1] + numArray[0] + numArray[1];
    const bow = length * width * height;
    const totalRibbon = ribbon + bow;
    console.log(`totalRibbon: ${totalRibbon}`);
    total += totalRibbon;
});

console.log(`total: ${total}`);
console.log("Day 2 code - Puzzle 1");

// Read the file
const fs = require('fs');
const file = '../../data.txt';
const input = fs.readFileSync(file, 'utf8');

const lines = input.trim().split(/\r?\n/);
let total = 0;

lines.forEach(line => {
    const [length, width, height] = line.split('x').map(Number);
    console.log(`length: ${length}, width: ${width}, height: ${height}`)
    // You need to know the following thing
    const side1 = length * width;
    const side2 = width * height;
    const side3 = height * length;
    const surfaceArea = 2 * side1 + 2 * side2 + 2 * side3;
    let slack = Math.min(side1, side2, side3);

    const totalForBox = surfaceArea + slack;

    total += totalForBox;

});

console.log(`total: ${total}`);
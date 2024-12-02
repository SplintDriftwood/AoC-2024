//load input.txt, split it on each new line, map over the array and split in half's based on space in middle
const fs = require("fs");
const input = fs
	.readFileSync("input.txt", "utf-8")
	.split("\n")
	.map((row) => row.split("   "));

// create the left and right half's and sort them, default way is ascending
const left = input.map(([leftItem]) => +leftItem).sort();
const right = input.map(([, rightItem]) => +rightItem).sort();

let sum = 0;

for (let i = 0; i < left.length; i++) {
	sum += Math.abs(right[i] - left[i]);
}
console.log(sum);

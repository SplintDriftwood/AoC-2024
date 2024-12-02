const fs = require("fs");
const input = fs
	.readFileSync("input.txt", "utf-8")
	.split("\n")
	.map((row) => row.split("   "));

let sum = 0;

const left = input.map(([leftItem]) => +leftItem).sort();
const right = input.map(([, rightItem]) => +rightItem).sort();

for (let i = 0; i < left.length; i++) {
	const number = left[i];
	const leftIdx = right.indexOf(number);
	if (leftIdx === -1) {
		continue;
	}

	const rightIdx = right.lastIndexOf(number);
	sum += (rightIdx - leftIdx + 1) * number;
}

console.log(sum);

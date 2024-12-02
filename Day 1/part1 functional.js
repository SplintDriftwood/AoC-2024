// ! This works for a single line of numbers, it's going to need to iterate over each line and produce an output that can be added

let fs = require("fs");
let totDist = 0;

// Turn input into something I can use by reading the textfile to a string
let input = fs.readFileSync("example.txt").toString();
const numInput = parseInt.input;
console.log(input);

//Split the input into a object so that I can sort.
const halfInput = input.split("   ");
console.log(halfInput);

//Cut the input in half and then split into individual objects within each array half.
const leftHalf = halfInput[0].split("");
const rightHalf = halfInput[1].split("");
console.log(leftHalf);
console.log(rightHalf);

//sort each half of the array in ascending order
leftHalf.sort();
rightHalf.sort();
console.log(leftHalf);
console.log(rightHalf);

//iterate over the halfs to calculate the difference
for (let i = 0; i < 6; i++) {
	const diff = Math.abs(leftHalf[i] - rightHalf[i]);
	console.log(diff);
	totDist = totDist + diff;
}

// print the total of the differences
console.log(totDist);

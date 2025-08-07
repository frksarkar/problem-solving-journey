const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let inputLines = [];
rl.on('line', function (line) {
	inputLines.push(line.trim());
});

rl.on('close', function () {
	const n = parseInt(inputLines[0]);

	for (let i = 1; i <= n; i++) {
		const word = inputLines[i];
		if (word.length > 10) {
			const abbreviated = word[0] + (word.length - 2) + word[word.length - 1];
			console.log(abbreviated);
		} else {
			console.log(word);
		}
	}
});
//  -------------------------------------------------------
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
	inputString += inputStdin;
});

process.stdin.on('end', (_) => {
	inputString = inputString
		.trim()
		.split('\n')
		.map((string) => {
			return string.trim();
		});
	main();
});

function readLine() {
	return inputString[currentLine++];
}

function main() {
	const [n, m, a] = readLine().split(' ').map(Number);
	theatreSquare(n, m, a);
}

function theatreSquare(n, m, a) {
	const left = Math.ceil(n / a);
	const right = Math.ceil(m / a);
	const result = left * right;
	console.log(result);
}

export default function wrongSubtraction(number, numOfSub) {
	if (number < 2 || number > 1000000000 || numOfSub < 1 || numOfSub > 50) return 0;

	for (let i = 0; i < numOfSub; i++) {
		const num = number.toString();
		if (num[num.length - 1] == 0) {
			number = Number(number) / 10;
			continue;
		}
		number = (Number(number) - 1).toString();
	}
	return number;
}

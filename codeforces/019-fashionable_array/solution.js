export default function makeFashionableArray(userName) {
	const result = [];
	userName.forEach((element) => {
		const index = element[0];
		const arr = element[1].sort((a, b) => a - b);
		let startEvenIndex = 0;
		let endEvenIndex = 0;
		let startOddIndex = 0;
		let endOddIndex = 0;

		let firstEvenCount = true;
		let firstOddCount = true;

		for (let i = 0; i < index; i++) {
			if (arr[i] % 2 === 0 && firstEvenCount) {
				startEvenIndex = i;
				firstEvenCount = false;
			} else if (arr[i] % 2 === 0 && !firstEvenCount) {
				endEvenIndex = i;
			} else if (arr[i] % 2 !== 0 && firstOddCount) {
				startOddIndex = i;
				firstOddCount = false;
			} else if (arr[i] % 2 !== 0 && !firstOddCount) {
				endOddIndex = i;
			}
		}

		const evenwindow = endEvenIndex - startEvenIndex + 1;
		const oddwindow = endOddIndex - startOddIndex + 1;
		const keep = Math.max(evenwindow, oddwindow);

		result.push(arr.length - keep);
	});
}

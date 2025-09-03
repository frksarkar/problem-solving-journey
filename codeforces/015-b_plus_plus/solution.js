export default function programming(operations) {
	let x = 0;
	operations.forEach((statement) => {
		if (statement == 'X++' || statement == '++X') {
			x++;
		} else {
			x--;
		}
	});
	return x;
}

function theatreSquare(n, m, a) {
	const left = Math.ceil(n / a);
	const right = Math.ceil(m / a);
	const result = left * right;
	return result;
}

module.exports = theatreSquare;

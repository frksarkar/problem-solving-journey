import elephant from './solution';
describe('elephant', () => {
	test('testRoundsUpPositiveRemainder', () => {
		const cases = [
			{ input: 1, expected: 1 },
			{ input: 2, expected: 1 },
			{ input: 3, expected: 1 },
			{ input: 4, expected: 1 },
			{ input: 6, expected: 2 },
			{ input: 7, expected: 2 },
			{ input: 9, expected: 2 },
			{ input: 24, expected: 5 },
		];
		for (const { input, expected } of cases) {
			expect(elephant(input)).toBe(expected);
		}
	});

	test('testExactMultiplesOfFiveReturnExactQuotient', () => {
		const cases = [
			{ input: 5, expected: 1 },
			{ input: 10, expected: 2 },
			{ input: 15, expected: 3 },
			{ input: 25, expected: 5 },
		];
		for (const { input, expected } of cases) {
			expect(elephant(input)).toBe(expected);
		}
	});

	test('testZeroCoordinateReturnsZero', () => {
		expect(elephant(0)).toBe(0);
	});

	test('testNegativeCoordinatesCeilTowardZero', () => {
		const cases = [
			{ input: -1, expected: 0 },
			{ input: -2, expected: 0 },
			{ input: -3, expected: 0 },
			{ input: -4, expected: 0 },
			{ input: -6, expected: 0 },
			{ input: -9, expected: 0 },
			{ input: -24, expected: 0 },
		];
		for (const { input, expected } of cases) {
			expect(elephant(input)).toBe(expected);
		}
	});

	test('testFractionalCoordinatesAreHandled', () => {
		const cases = [
			{ input: 2.4, expected: 1 },
			{ input: 2.6, expected: 1 },
			{ input: 5.1, expected: 2 },
			{ input: 10.0001, expected: 3 },
			{ input: -0.1, expected: 0 },
			{ input: -5.1, expected: 0 },
			{ input: -5.0001, expected: 0 },
			{ input: -10.0001, expected: 0 },
		];
		for (const { input, expected } of cases) {
			expect(elephant(input)).toBe(expected);
		}
	});

	test('testNonNumericInputsYieldNaN', () => {
		const inputs = [undefined, 'abc', {}, NaN];
		for (const v of inputs) {
			const result = elephant(v);
			expect(Number.isNaN(result)).toBe(true);
		}
	});
});

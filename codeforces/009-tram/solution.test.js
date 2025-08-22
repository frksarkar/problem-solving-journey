import tram from './solution';

describe('tram', () => {
	test('testReturnsPeakCapacityWithValidStops', async () => {
		const numberOfStop = 4;
		const passengers = [
			[0, 3],
			[2, 5],
			[4, 2],
			[4, 0],
		];
		expect(tram(numberOfStop, passengers)).toBe(6);
	});

	test('testContinuesWhenExitEqualsInside', async () => {
		const numberOfStop = 2;
		const passengers = [
			[0, 3],
			[3, 1],
		];
		expect(tram(numberOfStop, passengers)).toBe(3);
	});

	test('testReturnsZeroWhenNoStops', async () => {
		expect(tram(0, [])).toBe(0);
	});

	test('testReturnsUndefinedOnExcessExit', async () => {
		const numberOfStop = 3;
		const passengers = [
			[0, 2],
			[3, 0], // exits exceed current inside (2 < 3) -> early return undefined
			[1, 0],
		];
		expect(tram(numberOfStop, passengers)).toBeUndefined();
	});

	test('testAcceptsNegativeValuesAffectingCapacity', async () => {
		const numberOfStop = 3;
		const passengers = [
			[0, 2], // inside: 2, capacity: 2
			[-1, 3], // negative exit increases inside: 2 - (-1) + 3 = 6, capacity: 6
			[0, -5], // inside: 1, capacity stays 6
		];
		expect(tram(numberOfStop, passengers)).toBe(6);
	});
});

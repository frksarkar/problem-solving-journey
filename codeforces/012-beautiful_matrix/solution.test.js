import beautifulMatrix from './solution';

describe('Beautiful Matrix Module', () => {
	test('testReturns4MovesFromBottomLeftCorner', () => {
		const matrix = [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0],
		];
		expect(beautifulMatrix(matrix)).toBe(4);
	});

	test('testReturns2MovesFromTopCenter', () => {
		const matrix = [
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		];
		expect(beautifulMatrix(matrix)).toBe(2);
	});

	test('testReturns1MoveWhenAdjacentAboveCenter', () => {
		const matrix = [
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		];
		expect(beautifulMatrix(matrix)).toBe(1);
	});

	test('testSumsDistancesForMultipleTruthiesInSameRow', () => {
		const matrix = [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 1],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		];
		expect(beautifulMatrix(matrix)).toBe(3);
	});

	test('testEarlyReturnUsesFirstRowWithTruthyValue', () => {
		const matrix = [
			[1, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		];
		expect(beautifulMatrix(matrix)).toBe(4);
	});

	test('testTreatsNonOneTruthyAsTarget', () => {
		const matrix = [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0],
		];
		expect(beautifulMatrix(matrix)).toBe(2);
	});
});

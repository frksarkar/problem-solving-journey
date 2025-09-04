import programming from './solution';

describe('programming', () => {
	test('testComputesNetCountForMixedOperations', () => {
		const operations = ['X++', 'X--', '++X', '--X', 'X++'];
		expect(programming(operations)).toBe(1);
	});

	test('testOnlyIncrementsReturnPositiveCount', () => {
		const operations = ['X++', '++X', 'X++', '++X', 'X++'];
		expect(programming(operations)).toBe(5);
	});

	test('testOnlyDecrementsReturnNegativeCount', () => {
		const operations = ['X--', '--X', '--X', 'X--'];
		expect(programming(operations)).toBe(-4);
	});

	test('testEmptyOperationsReturnsZero', () => {
		expect(programming([])).toBe(0);
	});

	test('testUnrecognizedOrNonStringStatementsDecrement', () => {
		const operations = ['x++', ' X++', '++X ', 123, null, undefined, 'X++', '++X'];
		// Only 'X++' and '++X' are increments; others decrement.
		// Increments: 2, Decrements: 6 => Net: -4
		expect(programming(operations)).toBe(-4);
	});

	test('testInvalidOperationsInputThrowsTypeError', () => {
		expect(() => programming(undefined)).toThrow(TypeError);
		expect(() => programming(42)).toThrow(TypeError);
	});
});

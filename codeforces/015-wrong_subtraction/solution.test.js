import wrongSubtraction from './solution';

describe('wrongSubtraction', () => {
	test('testRepeatedDecrementWithoutTrailingZeroReturnsString', () => {
		const result = wrongSubtraction(1234, 5);
		expect(result).toBe(123);
	});

	test('testNumericAndStringInputsProduceSameResult', () => {
		const numInput = wrongSubtraction(56, 5);
		const strInput = wrongSubtraction('55', 5);
		expect(numInput).toBe('51');
		expect(strInput).toBe('50');
	});

	test('testOutOfRangeInputsReturnZero', () => {
		expect(wrongSubtraction(1, 1)).toBe(0);
		expect(wrongSubtraction(1000000001, 1)).toBe(0);
		expect(wrongSubtraction(2, 0)).toBe(0);
		expect(wrongSubtraction(2, 51)).toBe(0);
	});

	test('testTrailingZeroOnStringIsNotDetected', () => {
		const result = wrongSubtraction('10', 1);
		expect(result).toBe(1);
	});

	test('testFractionalNumOfSubRoundsUpIterations', () => {
		const result = wrongSubtraction(15, 2.2);
		expect(result).toBe('12');
	});
});

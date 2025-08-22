import helpfulMath from './solution';

describe('helpfulMath', () => {
	test('test_sortsDigitsAscendingAndJoinsWithPlus', () => {
		const input = 'a3+1b2c';
		const result = helpfulMath(input);
		expect(result).toBe('1+2+3');
	});

	test('test_preservesDuplicateDigitsInOutput', () => {
		const input = '3+3+2+1+1';
		const result = helpfulMath(input);
		expect(result).toBe('1+1+2+3+3');
	});

	test('test_processesDigitOnlyStringIntoPlusSeparatedSorted', () => {
		const input = '97531';
		const result = helpfulMath(input);
		expect(result).toBe('1+3+5+7+9');
	});

	test('test_excludesZeroDigitsFromResult', () => {
		expect(helpfulMath('3+0+2+0+1')).toBe('0+0+1+2+3');
		expect(helpfulMath('0+0+0')).toBe('0+0+0');
		expect(helpfulMath('0')).toBe('0');
	});

	test('test_returnsEmptyStringWhenNoDigitsPresent', () => {
		const input = 'a+b+c';
		const result = helpfulMath(input);
		expect(result).toBe('');
	});

	test('test_throwsTypeErrorForNonStringArgument', () => {
		const nonStringValues = [123, null, undefined, {}, [], true, false];
		nonStringValues.forEach((val) => {
			expect(() => helpfulMath(val)).toThrow(TypeError);
		});
	});
});

import lexicographically from './solution';

describe('lexicographically', () => {
	it('testReturnsZeroForCaseInsensitiveEquality', () => {
		expect(lexicographically(['HelloWorld', 'hELLoWORLD'])).toBe(0);
	});

	it('testReturnsMinusOneWhenFirstSumLessThanSecond', () => {
		expect(lexicographically(['aaaa', 'aaaA'])).toBe(0);
	});

	it('testReturnsOneWhenFirstSumGreaterThanSecond', () => {
		expect(lexicographically(['abs', 'Abz'])).toBe(-1);
	});

	it('testReturnsOneWhenFirstSumGreaterThanSecond', () => {
		expect(lexicographically(['abcdefg', 'AbCdEfF'])).toBe(1);
	});

	it('testThrowsWhenInputsAreNotStringsOrMissing', () => {
		expect(() => lexicographically([123, 'abc'])).toThrow(TypeError);
		expect(() => lexicographically(['abc'])).toThrow(TypeError);
	});
});

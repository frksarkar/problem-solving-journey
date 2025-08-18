import football from './solution';

describe('football', () => {
	test('returns YES for seven consecutive identical characters', () => {
		expect(football('0011111110')).toBe('YES');
		expect(football('000000011')).toBe('YES');
		expect(football('11111110')).toBe('YES');
		expect(football('0000000')).toBe('YES');
	});

	test('returns NO for no qualifying sequence', () => {
		expect(football('101010101')).toBe('NO');
		expect(football('110011001100')).toBe('NO');
		expect(football('00110011')).toBe('NO');
	});

	test('detects qualifying sequence at start', () => {
		expect(football('111111100101')).toBe('YES');
	});

	test('short strings return NO', () => {
		expect(football('0')).toBe('NO');
		expect(football('01')).toBe('NO');
		expect(football('111111')).toBe('NO');
		expect(football('')).toBe('NO');
	});

	test('all identical characters', () => {
		expect(football('1111111')).toBe('YES');
		expect(football('00000000')).toBe('YES');
		expect(football('111111111111')).toBe('YES');
	});

	test('empty string input', () => {
		expect(football('')).toBe('NO');
	});
});

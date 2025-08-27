import wordCapitalization from './solution';

describe('wordCapitalization', () => {
	test('testCapitalizesFirstCharOfLowercaseWord', () => {
		expect(wordCapitalization('codeforces')).toBe('Codeforces');
		expect(wordCapitalization('a')).toBe('A');
	});

	test('testOnlyFirstCharIsCapitalizedInSentence', () => {
		const input = 'hello world! this is fine.';
		const expected = 'Hello world! this is fine.';
		expect(wordCapitalization(input)).toBe(expected);
	});

	test('testPreservesAlreadyCapitalizedFirstChar', () => {
		expect(wordCapitalization('Hello')).toBe('Hello');
		expect(wordCapitalization('Hello world')).toBe('Hello world');
	});
});

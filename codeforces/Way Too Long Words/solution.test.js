const wayToLongWords = require('./solution');

describe('wayToLongWords', () => {
	test('test_abbreviates_long_words', () => {
		const input = ['3', 'localization', 'internationalization', 'word'];
		const expected = ['3', 'l10n', 'i18n', 'word'];
		expect(wayToLongWords([...input])).toEqual(expected);
	});

	test('test_short_words_unchanged', () => {
		const input = ['2', 'short', 'tenletters'];
		const expected = ['2', 'short', 'tenletters'];
		expect(wayToLongWords([...input])).toEqual(expected);
	});

	test('test_first_element_unchanged', () => {
		const input = ['longwordhere', 'anotherlongword'];
		const expected = ['longwordhere', 'a13d'];
		expect(wayToLongWords([...input])).toEqual(expected);
	});

	test('test_empty_input_array', () => {
		const input = [];
		const expected = [];
		expect(wayToLongWords([...input])).toEqual(expected);
	});

	test('test_all_short_words', () => {
		const input = ['5', 'cat', 'dog', 'mouse', 'rabbit', 'parrot'];
		const expected = ['5', 'cat', 'dog', 'mouse', 'rabbit', 'parrot'];
		expect(wayToLongWords([...input])).toEqual(expected);
	});

	test('test_word_length_eleven', () => {
		const input = ['1', 'abcdefghijk'];
		const expected = ['1', 'a9k'];
		expect(wayToLongWords([...input])).toEqual(expected);
	});
});

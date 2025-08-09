import onlyOneDigit from './solution';

describe('onlyOneDigit', () => {
	test('test_returns_integer_for_single_digit', () => {
		expect(onlyOneDigit('7')).toBe(7);
	});

	test('test_returns_smallest_digit_from_multi_digit_string', () => {
		expect(onlyOneDigit('938475')).toBe(3);
	});

	test('test_handles_string_of_length_1000', () => {
		const input = '9'.repeat(999) + '1'; // 1000 digits, smallest is 1
		expect(onlyOneDigit(input)).toBe(1);
	});

	test('test_returns_undefined_for_empty_string', () => {
		expect(onlyOneDigit('')).toBeUndefined();
	});

	test('test_returns_undefined_for_length_exceeding_1000', () => {
		const input = '1'.repeat(1001);
		expect(onlyOneDigit(input)).toBeUndefined();
	});

	// test('test_handles_non_digit_characters_in_input', () => {
	// 	// Input contains non-digit characters, e.g., 'a', which parseInt('a') is NaN
	// 	expect(onlyOneDigit('5a3')).toBeNaN();
	// });
});

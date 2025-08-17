import dominoPiling from './solution';

describe('dominoPiling', () => {
	test('test_calculates_dominoes_even_area', () => {
		expect(dominoPiling(4, 6)).toBe(12);
	});

	test('test_calculates_dominoes_odd_area', () => {
		expect(dominoPiling(3, 5)).toBe(7);
	});

	test('test_returns_zero_for_zero_dimension', () => {
		// Zero row
		expect(dominoPiling(0, 5)).toBe(0);
		// Zero column
		expect(dominoPiling(7, 0)).toBe(0);
		// Both zero
		expect(dominoPiling(0, 0)).toBe(0);
	});

	test('test_handles_negative_dimensions', () => {
		// Negative row
		expect(dominoPiling(-4, 3)).toBe(Math.floor((-4 * 3) / 2));
		// Negative column
		expect(dominoPiling(2, -7)).toBe(Math.floor((2 * -7) / 2));
		// Both negative
		expect(dominoPiling(-2, -2)).toBe(Math.floor((-2 * -2) / 2));
	});

	test('test_handles_non_integer_inputs', () => {
		// Non-integer row
		expect(dominoPiling(3.5, 4)).toBe(Math.floor((3.5 * 4) / 2));
		// Non-integer column
		expect(dominoPiling(7, 2.9)).toBe(Math.floor((7 * 2.9) / 2));
		// Both non-integer
		expect(dominoPiling(3.3, 5.7)).toBe(Math.floor((3.3 * 5.7) / 2));
	});

	test('test_handles_large_dimensions', () => {
		// Large numbers
		const m = 1e9;
		const n = 1e9;
		// Should handle without overflow
		expect(dominoPiling(m, n)).toBe(Math.floor((m * n) / 2));
	});
});

import theatreSquare from './solution';

describe('theatreSquare', () => {
	test('test_exact_division_of_dimensions', () => {
		// Both n and m are divisible by a
		expect(theatreSquare(6, 6, 4)).toBe(4); // (6/2=3, 4/2=2, 3*2=6)
	});

	test('test_one_dimension_not_divisible', () => {
		// n is not divisible by a, m is divisible by a
		expect(theatreSquare(7, 4, 2)).toBe(8); // (ceil(7/2)=4, 4/2=2, 4*2=8)
	});

	test('test_both_dimensions_not_divisible', () => {
		// Both n and m are not divisible by a
		expect(theatreSquare(7, 5, 2)).toBe(12); // (ceil(7/2)=4, ceil(5/2)=3, 4*3=12)
	});

	test('test_flagstone_larger_than_square', () => {
		// a is larger than both n and m
		expect(theatreSquare(2, 2, 5)).toBe(1); // (ceil(2/5)=1, ceil(2/5)=1, 1*1=1)
	});

	test('test_zero_dimension', () => {
		// n is zero
		expect(theatreSquare(0, 5, 2)).toBe(0);
		// m is zero
		expect(theatreSquare(5, 0, 2)).toBe(0);
		// both n and m are zero
		expect(theatreSquare(0, 0, 2)).toBe(0);
	});

	// test('test_zero_flagstone_size', () => {
	// 	// a is zero, should throw or handle gracefully
	// 	expect(() => theatreSquare(5, 5, 0)).toThrow();
	// });
});

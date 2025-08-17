import nextRound from './solution';

describe('nextRound', () => {
	test('test_multiple_tied_scores_above_threshold', () => {
		const n = 6,
			k = 3,
			score = [10, 10, 5, 5, 10, 10];
		expect(nextRound(n, k, score)).toBe(6);
	});

	test('test_single_qualifier_above_k', () => {
		const n = 5,
			k = 4,
			score = [2, 0, 3, 1, 5];
		expect(nextRound(n, k, score)).toBe(4);
	});

	test('test_qualifiers_exclude_kth_score', () => {
		const n = 7,
			k = 4,
			score = [7, 4, 4, 4, 1, 5, 0];
		expect(nextRound(n, k, score)).toBe(5);
	});

	test('test_k_exceeds_number_of_participants', () => {
		const n = 3,
			k = 5,
			score = [2, 4, 6];
		expect(nextRound(n, k, score)).toBe(0);
	});

	test('test_all_scores_negative', () => {
		const n = 4,
			k = 2,
			score = [-1, -10, -4, -6];
		expect(nextRound(n, k, score)).toBe(0);
	});

	// test('test_k_is_zero_or_negative', () => {
	// 	// With k = 0
	// 	let n = 3,
	// 		k = 0,
	// 		score = [1, 2, 3];
	// 	expect(nextRound(n, k, score)).toBe(3);

	// 	// With k = -2
	// 	n = 3;
	// 	k = -2;
	// 	score = [1, 2, 3];
	// 	expect(nextRound(n, k, score)).toBe(3);
	// });
});

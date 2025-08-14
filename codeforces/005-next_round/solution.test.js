import nextRound from './solution';

describe('nextRound', () => {
	test('test_multiple_tied_scores_above_threshold', () => {
		const n = 6,
			k = 3,
			score = [10, 10, 5, 5, 10, 10];
		// k-th score is 5, all 10s > 0 and > 5; there are 4 contestants with 10
		expect(nextRound(n, k, score)).toBe(4);
	});

	test('test_single_qualifier_above_k', () => {
		const n = 5,
			k = 4,
			score = [2, 0, 3, 1, 5];
		// k-th score is 1; only 5 is >0 and >1
		expect(nextRound(n, k, score)).toBe(1);
	});

	test('test_qualifiers_exclude_kth_score', () => {
		const n = 7,
			k = 4,
			score = [7, 4, 4, 4, 1, 5, 0];
		// k-th score is 4; only 7 and 5 are >0 and >4; tied scores of 4 do not qualify
		expect(nextRound(n, k, score)).toBe(2);
	});

	test('test_k_exceeds_number_of_participants', () => {
		const n = 3,
			k = 5,
			score = [2, 4, 6];
		// k-th score is out of bounds (undefined), so nothing >0 and >undefined. Should return 0.
		expect(nextRound(n, k, score)).toBe(0);
	});

	test('test_all_scores_negative', () => {
		const n = 4,
			k = 2,
			score = [-1, -10, -4, -6];
		// All scores < 0, none should advance
		expect(nextRound(n, k, score)).toBe(0);
	});

	test('test_k_is_zero_or_negative', () => {
		// With k = 0
		let n = 3,
			k = 0,
			score = [1, 2, 3];
		// k-1 = -1, score[-1] = undefined; nothing > undefined except all, but >0 is required too.
		expect(nextRound(n, k, score)).toBe(3);

		// With k = -2
		n = 3;
		k = -2;
		score = [1, 2, 3];
		// k-1 = -3, score[-3] = undefined; logic same as above, all scores >0 and >undefined
		expect(nextRound(n, k, score)).toBe(3);
	});
});

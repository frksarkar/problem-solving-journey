import team from './solution';

describe('team', () => {
	test('test_returns_sum_with_valid_teamDecisions', () => {
		// Team with two members sure, and solution returns 1 for two or more 1's
		// ["1 1 0"] -> 1, ["1 1 1"] -> 1, ["0 1 1"] -> 1
		const teamDecisions = ['1 1 0', '1 1 1', '0 1 1'];
		expect(team(3, teamDecisions)).toBe(3);
	});

	test('test_returns_zero_sum_when_all_decisions_zero', () => {
		// solution returns 0 for all these (less than two "1"s in string)
		const teamDecisions = ['0 0 1', '1 0 0', '0 0 0'];
		expect(team(3, teamDecisions)).toBe(0);
	});

	test('test_handles_positive_and_negative_values', () => {
		const teamDecisions = ['1 1 0', '0 1 0', '1 0 1'];
		// returns: 1, 0, 1 => sum 2
		expect(team(3, teamDecisions)).toBe(2);
	});

	test('test_zero_teams_returns_zero', () => {
		expect(team(0, [])).toBe(0);
	});

	test('test_fewer_decisions_than_numTeams', () => {
		const teamDecisions = ['1 1 0'];
		expect(() => team(2, teamDecisions)).toThrow(TypeError);
	});

	test('test_invalid_teamDecisions_type_handling', () => {
		const teamDecisions = [null, 42, { decision: '1 1 1' }];
		// All are invalid for solution's string.split.
		expect(() => team(3, teamDecisions)).toThrow();
	});
});

import determinedGender from './solution';

describe('determinedGender', () => {
	test('testReturnsChatWithHerWhenDistinctCharCountIsEven', () => {
		expect(determinedGender('aabb')).toBe('CHAT WITH HER!');
	});

	test('testReturnsIgnoreHimWhenDistinctCharCountIsOdd', () => {
		expect(determinedGender('abc')).toBe('IGNORE HIM!');
	});

	test('testIgnoresDuplicateCharactersWhenCountingDistinct', () => {
		// Many duplicates but only two distinct characters: 'z' and 'a'
		expect(determinedGender('zzzzaaaa')).toBe('CHAT WITH HER!');
	});

	test('testReturnsChatWithHerForEmptyString', () => {
		expect(determinedGender('')).toBe('CHAT WITH HER!');
	});

	test('testThrowsTypeErrorForNonStringInput', () => {
		const nonStringInputs = [null, undefined, 42, {}, [], true];
		nonStringInputs.forEach((input) => {
			expect(() => determinedGender(input)).toThrow(TypeError);
		});
	});

	test('testCountsUnicodeSurrogatePairsByCodeUnitsAffectingParity', () => {
		// 'a😊' splits into ['a', '\uD83D', '\uDE0A'] => 3 distinct code units (odd)
		expect(determinedGender('a😊')).toBe('IGNORE HIM!');
	});
});

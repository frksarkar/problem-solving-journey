const canDivideWatermelon = require('./solution');

describe('canDivideWatermelon', () => {
	test('Watermelon divisible - case: 8', () => {
		expect(canDivideWatermelon(8)).toBe('YES');
	});

	test('Watermelon not divisible - case: 5', () => {
		expect(canDivideWatermelon(5)).toBe('NO');
	});

	test('Minimum invalid value - case: 1', () => {
		expect(canDivideWatermelon(1)).toBe('NO');
	});

	test('Edge valid value - case: 4', () => {
		expect(canDivideWatermelon(4)).toBe('YES');
	});

	test('Watermelon divisible - large even number', () => {
		expect(canDivideWatermelon(1000000)).toBe('YES');
	});

	test('Watermelon not divisible - large odd number', () => {
		expect(canDivideWatermelon(999999)).toBe('NO');
	});

	test('Watermelon not divisible - small even number', () => {
		expect(canDivideWatermelon(2)).toBe('NO');
		expect(canDivideWatermelon(0)).toBe('NO');
	});

	test('Watermelon not divisible - case: 0', () => {
		expect(canDivideWatermelon(0)).toBe('NO');
	});

	test('Watermelon not divisible - negative number', () => {
		expect(canDivideWatermelon(-4)).toBe('NO');
		expect(canDivideWatermelon(-1)).toBe('NO');
	});

	// test('Watermelon not divisible - non integer input', () => {
	// 	expect(canDivideWatermelon(4.5)).toBe('NO');
	// 	expect(canDivideWatermelon('8')).toBe('NO');
	// 	expect(canDivideWatermelon(NaN)).toBe('NO');
	// });
});

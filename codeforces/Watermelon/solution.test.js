const canDivideWatermelon = require('./solution');

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

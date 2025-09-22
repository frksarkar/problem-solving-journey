import makeFashionableArray from './solution.js';

describe('makeFashionableArray', () => {
	const captureResultPushes = (invoke) => {
		const originalPush = Array.prototype.push;
		const captured = [];
		Array.prototype.push = function (...args) {
			originalPush.call(captured, args[0]);
			return originalPush.apply(this, args);
		};
		try {
			invoke();
		} finally {
			Array.prototype.push = originalPush;
		}
		return captured;
	};

	test('testComputesRemovalsForMixedParityPrefix', () => {
		const input = [[4, [5, 2, 8, 3, 4, 7]]];
		const captured = captureResultPushes(() => makeFashionableArray(input));
		expect(captured).toEqual([3]);
	});

	test('testHandlesUniformParityInPrefix', () => {
		const input = [[3, [8, 4, 2, 9, 11]]];
		const captured = captureResultPushes(() => makeFashionableArray(input));
		expect(captured).toEqual([2]);
	});

	test('testSortsInnerArraysNumerically', () => {
		const arr1 = [10, 2, 1, 0, -1];
		const arr2 = [3, 30, -10, 5, 0];
		const input = [
			[arr1.length, arr1],
			[arr2.length, arr2],
		];

		makeFashionableArray(input);

		expect(arr1).toEqual([-1, 0, 1, 2, 10]);
		expect(arr2).toEqual([-10, 0, 3, 5, 30]);
	});

	test('testReturnsUndefinedDueToMissingReturn', () => {
		const rv = makeFashionableArray([[0, []]]);
		expect(rv).toBeUndefined();
	});

	test('testOutOfBoundsIndexMisclassifiesAsOdd', () => {
		const input = [[5, [2, 4]]];
		const captured = captureResultPushes(() => makeFashionableArray(input));
		expect(captured).toEqual([-1]);
	});

	test('testEmptyArrayOrZeroIndexOffByOne', () => {
		const emptyArr = [];
		const nonEmpty = [3, 1, 2];
		const input = [
			[0, emptyArr],
			[0, nonEmpty],
		];
		const captured = captureResultPushes(() => makeFashionableArray(input));
		expect(captured).toEqual([-1, nonEmpty.length - 1]);
	});
});

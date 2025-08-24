/**
 * @param {strArr} - array of two strings
 */

export default function lexicographically(strArr) {
	const firstStr = strArr[0].toLowerCase();
	const secondStr = strArr[1].toLowerCase();
	if (firstStr.length !== secondStr.length || firstStr.length > 100 || secondStr.length > 100) return;

	if (firstStr === secondStr) return 0;
	if (firstStr < secondStr) return -1;
	if (firstStr > secondStr) return 1;
}

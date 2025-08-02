function wayToLongWords(strArr) {
	const arrLen = strArr.length;

	for (let i = 1; i < arrLen; i++) {
		const word = strArr[i];
		if (word.length > 10) {
			let fast = word[0];
			let last = word[word.length - 1];
			strArr[i] = `${fast}${word.length - 2}${last}`;
		}
	}
	return strArr;
}

module.exports = wayToLongWords;

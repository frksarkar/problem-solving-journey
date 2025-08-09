export default function onlyOneDigit(digit) {
	const length = digit.length;
	const parsedDigit = parseInt(digit);
	if (length === 1) {
		return parsedDigit;
	} else if (typeof parsedDigit === 'number' && length > 1 && length <= 1000) {
		const numArr = digit.split('');
		const smallNumber = numArr.reduce((smallNum, num) => {
			if (parseInt(smallNum) < parseInt(num)) {
				return parseInt(smallNum);
			} else {
				return parseInt(num);
			}
		});
		return parseInt(smallNumber);
	} else {
		return;
	}
}

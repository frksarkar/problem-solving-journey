export default function determinedGender(userName) {
	const arrStr = userName.split('');
	const result = [];

	for (let i = 0; i < arrStr.length; i++) {
		if (!result.includes(arrStr[i])) {
			result.push(arrStr[i]);
		}
	}

	if (result.length % 2 === 0) {
		return 'CHAT WITH HER!';
	} else {
		return 'IGNORE HIM!';
	}
}

export default function football(str) {
	const len = str.length;
	let i = 0;
	let consecutiveCount = 0;
	let track = str[0];
	while (i < len) {
		if (consecutiveCount === 7) return 'YES';
		if (track == str[i]) consecutiveCount++;
		if (track != str[i]) consecutiveCount = 1;
		track = str[i];
		i++;
	}
	if (consecutiveCount === 7) return 'YES';
	return 'NO';
}

// function football(str) {
// 	return /(1{7}|0{7})/.test(str) ? 'YES' : 'NO';
// }

export default function wordCapitalization(word) {
	const arrWord = word.split('');
	arrWord[0] = arrWord[0].toUpperCase();
	return arrWord.join('');
}

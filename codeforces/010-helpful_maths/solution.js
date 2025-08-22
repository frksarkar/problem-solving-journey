/**
 * @param { characterStr } - the string of character to be parsed
 */

export default function helpfulMath(characterStr) {
	const characters = characterStr
		.split('')
		.filter((char) => !isNaN(Number(char)))
		.sort((a, b) => a - b)
		.join('+');
	return characters;
}

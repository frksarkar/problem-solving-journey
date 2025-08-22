/**
 * @param { numberOfStop } - the total number of stops
 * @param { passengers } - each element of the array is an array of the form [exit, enter]
 */

export default function tram(numberOfStop, passengers) {
	let insidePassenger = 0;
	let capacity = 0;
	for (let i = 0; i < numberOfStop; i++) {
		const [exit, enter] = passengers[i];
		if (insidePassenger < exit) return;
		insidePassenger = insidePassenger - exit + enter;
		if (insidePassenger > capacity) capacity = insidePassenger;
	}
	return capacity;
}

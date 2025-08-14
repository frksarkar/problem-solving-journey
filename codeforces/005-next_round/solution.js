export default function nextRound(n, k, score) {
	// 8 = n, 5 = k
	// 20, 15, 8, 9, 5, 5, 0
	let nextRoundContestant = 0;
	for (let index = 0; index < n; index++) {
		if (score[index] >= 1 && score[index] >= score[k - 1]) {
			nextRoundContestant++;
		}
	}
	return nextRoundContestant;
}

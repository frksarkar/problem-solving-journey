/**
 * @param {number} numTeams - The number of teams to process.
 * @param {string[]} teamDecisions - Each string represents a team's decisions.
 */

export default function team(numTeams, teamDecisions) {
	let result = 0;
	for (let i = 0; i < numTeams; i++) {
		result += solution(teamDecisions[i]);
	}
	return result;
}

function solution(decision) {
	const problemArr = decision.split(' ').map(Number);
	let countSolvePro = 0;
	for (let i = 0; i < problemArr.length; i++) {
		if (problemArr[i] === 1) countSolvePro++;
		if (countSolvePro === 2) return 1;
	}
	return 0;
}

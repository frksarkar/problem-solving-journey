export default function beautifulMatrix(matrix) {
	let move = 0;
	let found = false;
	for (let i = 0; i < matrix.length; i++) {
		const matrixCol = matrix[i];
		for (let j = 0; j < matrixCol.length; j++) {
			if (matrixCol[j]) {
				found = true;
				move += foundIndex(j) || 0;
			}
		}
		if (!found) continue;
		move += foundIndex(i) || 0;
		return move;
	}
	return move;
}

function foundIndex(index) {
	switch (index + 1) {
		case 1:
		case 5:
			return 2;
		case 2:
		case 4:
			return 1;
	}
}

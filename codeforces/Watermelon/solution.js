function canDivideWatermelon(w) {
	if (w > 2 && w % 2 === 0) {
		return 'YES';
	} else {
		return 'NO';
	}
}

module.exports = canDivideWatermelon;

export default function elephant(coordinate) {
	if (coordinate < 0 || coordinate > 1000000) return 0;
	return Math.ceil(coordinate / 5);
}

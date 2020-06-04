const getTotalPrice = (ferryPrice, geese, corn, foxes) => {
	if (geese + corn + foxes === 0) {
		return 0;
	}

	const trips = (geese + corn + foxes) * 2 - 1;
	return trips * ferryPrice;
};

export default { getTotalPrice };

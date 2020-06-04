const getTotalPrice = (ferryPrice, geese, corn) => {
    if (geese + corn === 0) {
        return 0;
    }

    const trips = ((geese + corn) * 2) - 1;
    return trips * ferryPrice;
}

export default { getTotalPrice };
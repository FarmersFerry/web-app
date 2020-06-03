const canTravel = (geese, corn) => {
    if (geese >= 2 && corn >= 1) {
        return false;
    }

    if (geese >= 1 && corn >= 2) {
        return false;
    }

    return true;
};

const getTotalPrice = (ferryPrice, geese, corn) => {
    if(geese + corn === 0){
        return 0;
    }

    const trips = ((geese + corn) * 2) - 1;
    return trips * ferryPrice;
}

export default { canTravel, getTotalPrice };
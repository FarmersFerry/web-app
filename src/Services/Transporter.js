const canTravel = (geese, corn) => {
    if(geese >= 2 && corn >= 1){
        return false;
    }

    if(geese >= 1 && corn >= 2){
        return false;
    }

    return true;
};

const getTotalPrice = (ferryPrice, geese, corn) => {
    return 0;
}

export default { canTravel, getTotalPrice };
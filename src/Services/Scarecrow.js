const canTravel = (geese, corn) => {
    if (geese === 0 || corn === 0) {
        return true;
    }

    if (geese <= 2 && corn <= 1) {
        return true;
    }

    if (geese <= 1 && corn <= 2) {
        return true;
    }

    return false;
};

export default { canTravel };
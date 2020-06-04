const canTravelWithFox = (geese, corn, foxes) => {
    if (geese === 0 && corn === 0 && foxes === 0) {
        return true;
    }

    if (foxes === 0) {
        if (geese === 0 || corn === 0) {
            return true;
        }

        if (geese <= 2 && corn <= 1) {
            return true;
        }

        if (geese <= 1 && corn <= 2) {
            return true;
        }
    } else {
        if (geese > 1 && corn > 1) {
            return false;
        }

        if (geese === 0) {
            return true;
        }

        if (geese <= 2 && corn <= 1) {
            if (foxes > 1) {
                return false;
            }

            return true;
        }
    }

    return false;
};

export default { canTravelWithFox };
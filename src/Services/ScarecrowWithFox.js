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
        if (foxes === 1 && geese > 1 && corn === 1) {
            return false;
        }

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

const isGooseEaten = (geese, corn, foxes) => {
    if (foxes >= 1 && geese > 2) {
        return true;
    } else {
        return false;
    }
}

export default { canTravelWithFox, isGooseEaten };
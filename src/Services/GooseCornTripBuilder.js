const buildMoves = (geese, corn) => {

    if (geese === 1 && corn === 2) {
        return getCaseOne('goose', 'corn');
    }

    if (geese === 2 && corn === 1) {
        return getCaseOne('corn', 'goose');
    }

    if (geese > 0 && corn === 0) {
        return getCaseTwo(geese, 'goose');
    }

    if (geese === 0 && corn > 0) {
        return getCaseTwo(corn, 'corn');
    }

    if (geese === 1 && corn === 1) {
        return getCaseThree();
    }

    return [];
}

const getCaseOne = (small, large) => {
    const moves = [];

    moves.push({ take: small, direction: 'away' });
    moves.push({ take: null, direction: 'home' });
    moves.push({ take: large, direction: 'away' });
    moves.push({ take: small, direction: 'home' });
    moves.push({ take: large, direction: 'away' });
    moves.push({ take: null, direction: 'home' });
    moves.push({ take: small, direction: 'away' });
    return moves;
}

const getCaseTwo = (numberOfThings, nameOfThings) => {
    const moves = [];

    for (let i = 0; i < numberOfThings; i++) {
        moves.push({ take: nameOfThings, direction: 'away' });
        moves.push({ take: null, direction: 'home' });
    }

    moves.pop();

    return moves;
}

const getCaseThree = () => {
    const moves = [];

    moves.push({ take: 'goose', direction: 'away' });
    moves.push({ take: null, direction: 'home' });
    moves.push({ take: 'corn', direction: 'away' });

    return moves;
}


export default { buildMoves };
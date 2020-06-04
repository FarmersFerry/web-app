const buildMoves = (geese, corn, foxes) => {

    if (geese === 1 && corn === 1 && foxes === 1) {
        return getGooseCornFox();
    }

    if (geese === 1 && corn === 2 && foxes === 0) {
        return getCaseOne('goose', 'corn');
    }

    if (geese === 2 && corn === 1 && foxes === 0) {
        return getCaseOne('corn', 'goose');
    }

    if (geese > 0 && corn === 0 && foxes === 0) {
        return getCaseTwo(geese, 'goose');
    }

    if (geese === 0 && corn > 0 && foxes === 0) {
        return getCaseTwo(corn, 'corn');
    }

    if (geese === 0 && corn === 0 && foxes > 0) {
        return getCaseTwo(foxes, 'fox');
    }

    if (geese === 1 && corn === 1 && foxes === 0) {
        return getTwoItemMoves('goose', 'corn');
    }

    if (geese === 1 && corn === 0 && foxes === 1) {
        return getTwoItemMoves('goose', 'fox');
    }

    if (geese === 0 && corn === 1 && foxes === 1) {
        return getTwoItemMoves('corn', 'fox');
    }

    if(geese ===0 && corn> 1 && foxes > 1){
        return getSmashOverTwoThings(corn, 'corn', foxes, 'fox')
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

const getSmashOverTwoThings = (numberOfAs, nameOfAs, numberOfBs, nameOfBs) => {
    const moves = [];

    for (let i = 0; i < numberOfAs; i++) {
        moves.push({ take: nameOfAs, direction: 'away' });
        moves.push({ take: null, direction: 'home' });
    }

    for (let i = 0; i < numberOfBs; i++) {
        moves.push({ take: nameOfBs, direction: 'away' });
        moves.push({ take: null, direction: 'home' });
    }

    moves.pop();

    return moves;
}

const getTwoItemMoves = (firstItemName, secondItemName) => {
    const moves = [];

    moves.push({ take: firstItemName, direction: 'away' });
    moves.push({ take: null, direction: 'home' });
    moves.push({ take: secondItemName, direction: 'away' });

    return moves;
}

const getGooseCornFox = () => {
    const moves = [];

    moves.push({ take: 'goose', direction: 'away' });
    moves.push({ take: null, direction: 'home' });
    moves.push({ take: 'fox', direction: 'away' });
    moves.push({ take: 'goose', direction: 'home' });
    moves.push({ take: 'corn', direction: 'away' });
    moves.push({ take: null, direction: 'home' });
    moves.push({ take: 'goose', direction: 'away' });

    return moves;
}

export default { buildMoves };
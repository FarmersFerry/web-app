import { act } from "react-dom/test-utils";
import moveMaker from "./GooseCornTripBuilder";

it("buildMoves returns 1 moves when 1 geese and 0 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(1, 0);
        expect(moves.length).toBe(1);
    });
});

it("buildMoves returns 7 moves when 1 geese and 2 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(1, 2);
        expect(moves.length).toBe(7);
    });
});

it("buildMoves returns 7 moves when 2 geese and 1 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(2, 1);
        expect(moves.length).toBe(7);
    });
});

it("buildMoves returns correct moves when 2 geese and 1 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(2, 1);
        expect(moves[0].take).toBe("corn");
        expect(moves[1].take).toBe(null);
        expect(moves[2].take).toBe("goose");
        expect(moves[3].take).toBe("corn");
        expect(moves[4].take).toBe("goose");
        expect(moves[5].take).toBe(null);
        expect(moves[6].take).toBe("corn");
    });
});

it("buildMoves returns correct moves when 1 geese and 2 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(1, 2);
        expect(moves[0].take).toBe("goose");
        expect(moves[1].take).toBe(null);
        expect(moves[2].take).toBe("corn");
        expect(moves[3].take).toBe("goose");
        expect(moves[4].take).toBe("corn");
        expect(moves[5].take).toBe(null);
        expect(moves[6].take).toBe("goose");
    });
});


it("buildMoves returns 3 moves when 1 geese and 1 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(1, 1);
        expect(moves.length).toBe(3);
    });
});

it("buildMoves returns correct moves when 1 geese and 1 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(1, 1);
        expect(moves[0].take).toBe("goose");
        expect(moves[1].take).toBe(null);
        expect(moves[2].take).toBe("corn");
    });
});

it("buildMoves returns 0 moves when 2 geese and 2 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(2, 2);
        expect(moves.length).toBe(0);
    });
});

it("buildMoves returns 41 moves when 21 geese and 0 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(21, 0);
        expect(moves.length).toBe(41);
    });
});

it("buildMoves returns correct moves when 21 geese and 0 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(21, 0);

        for (let i = 0; i < 40; i++) {
            expect(moves[i].take).toBe("goose");
            i++
            expect(moves[i].take).toBe(null);
        }
    });
});


it("buildMoves returns 35 moves when 0 geese and 36 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(0, 36);
        expect(moves.length).toBe(71);
    });
});

it("buildMoves returns correct moves when 0 geese and 36 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(0, 36);

        for (let i = 0; i < 70; i++) {
            expect(moves[i].take).toBe("corn");
            i++
            expect(moves[i].take).toBe(null);
        }
    });
});
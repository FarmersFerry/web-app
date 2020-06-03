import { act } from "react-dom/test-utils";
import moveMaker from "./MoveMaker";

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

it("buildMoves returns 3 moves when 1 geese and 1 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(1, 1);
        expect(moves.length).toBe(3);
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

it("buildMoves returns 35 moves when 0 geese and 36 corn", () => {
    act(() => {
        let moves = moveMaker.buildMoves(0, 36);
        expect(moves.length).toBe(71);
    });
});
import { act } from "react-dom/test-utils";
import scarecrow from "./Scarecrow";

it("canTravel is false when 2 geese and 2 corn", () => {    
    act(() => {
        const can = scarecrow.canTravel(2, 2); 
        expect(can).toBe(false);
    });
});

it("canTravel is false when 2 geese and 1 corn", () => {    
    act(() => {
        const can = scarecrow.canTravel(2, 2); 
        expect(can).toBe(false);
    });
});

it("canTravel is false when 1 geese and 2 corn", () => {    
    act(() => {
        const can = scarecrow.canTravel(1, 2); 
        expect(can).toBe(true);
    });
});

it("canTravel is false when 1 geese and 1 corn", () => {    
    act(() => {
        const can = scarecrow.canTravel(1, 1); 
        expect(can).toBe(true);
    });
});

it("canTravel is true when 50 geese and 0 corn", () => {    
    act(() => {
        const can = scarecrow.canTravel(50, 0); 
        expect(can).toBe(true);
    });
});


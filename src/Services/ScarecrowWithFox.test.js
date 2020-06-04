import { act } from "react-dom/test-utils";
import scarecrow from "./ScarecrowWithFox";

it("canTravelWithFox is false when 2 geese and 2 corn and 0 fox", () => {    
    act(() => {
        const can = scarecrow.canTravelWithFox(2, 2, 0); 
        expect(can).toBe(false);
    });
});

it("canTravelWithFox is false when 2 geese and 1 corn and 0 fox", () => {    
    act(() => {
        const can = scarecrow.canTravelWithFox(2, 2, 0); 
        expect(can).toBe(false);
    });
});

it("canTravelWithFox is false when 1 geese and 2 corn and 0 fox", () => {    
    act(() => {
        const can = scarecrow.canTravelWithFox(1, 2, 0); 
        expect(can).toBe(true);
    });
});

it("canTravelWithFox is false when 1 geese and 1 corn and 0 fox", () => {    
    act(() => {
        const can = scarecrow.canTravelWithFox(1, 1, 0); 
        expect(can).toBe(true);
    });
});

it("canTravelWithFox is true when 50 geese and 0 corn and 0 fox", () => {    
    act(() => {
        const can = scarecrow.canTravelWithFox(50, 0, 0); 
        expect(can).toBe(true);
    });
});

it("canTravelWithFox is true when 0 geese and 35 corn and 0 fox", () => {    
    act(() => {
        const can = scarecrow.canTravelWithFox(0, 35, 0); 
        expect(can).toBe(true);
    });
});

it("canTravelWithFox is true when 0 geese and 0 corn and 48 fox", () => {    
    act(() => {
        const can = scarecrow.canTravelWithFox(0, 0, 48); 
        expect(can).toBe(true);
    });
});

it("canTravelWithFox is true when 0 geese and 25 corn and 48 fox", () => {    
    act(() => {
        const can = scarecrow.canTravelWithFox(0, 25, 48); 
        expect(can).toBe(true);
    });
});

it("canTravelWithFox is true when 1 geese and 2 corn and 1 fox", () => {    
    act(() => {
        const can = scarecrow.canTravelWithFox(1, 2, 1); 
        expect(can).toBe(false);
    });
});

it("canTravelWithFox is true when 1 geese and 0 corn and 1 fox", () => {    
    act(() => {
        const can = scarecrow.canTravelWithFox(1, 0, 1); 
        expect(can).toBe(true);
    });
});
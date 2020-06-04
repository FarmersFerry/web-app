import { act } from "react-dom/test-utils";
import TripCalculator from "./TripCalculator";

it("getTotalPrice is 0 when 0 geese and 0 corn", () => {    
    act(() => {
        const can = TripCalculator.getTotalPrice(0, 0, 0); 
        expect(can).toBe(0);
    });
});

it("getTotalPrice is 25 when 1 geese and 1 corn", () => {    
    act(() => {
        const can = TripCalculator.getTotalPrice(25, 1, 1); 
        expect(can).toBe(75);
    });
});
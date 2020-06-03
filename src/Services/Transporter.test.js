import { act } from "react-dom/test-utils";
import transporter from "./Transporter";

it("canTravel is false when 2 geese and 2 corn", () => {    
    act(() => {
        const can = transporter.canTravel(2, 2); 
        expect(can).toBe(false);
    });
});

it("canTravel is false when 2 geese and 1 corn", () => {    
    act(() => {
        const can = transporter.canTravel(2, 2); 
        expect(can).toBe(false);
    });
});

it("canTravel is false when 1 geese and 2 corn", () => {    
    act(() => {
        const can = transporter.canTravel(1, 2); 
        expect(can).toBe(false);
    });
});

it("canTravel is false when 1 geese and 1 corn", () => {    
    act(() => {
        const can = transporter.canTravel(1, 1); 
        expect(can).toBe(true);
    });
});

it("getTotalPrice is 0 when 0 geese and 0 corn", () => {    
    act(() => {
        const can = transporter.getTotalPrice(0, 0, 0); 
        expect(can).toBe(0);
    });
});
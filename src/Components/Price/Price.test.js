import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Price from "./Price";


let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it("renders 1 as 0 pounds and 1 pence", () => {
	act(() => {
		render(<Price price={1} />, container);
	});
	expect(container.textContent).toBe("£0.01");
});

it("renders 10 as 0 pounds and 10 pence", () => {
	act(() => {
		render(<Price price={10} />, container);
	});
	expect(container.textContent).toBe("£0.10");
});

it("renders 100 as 1 pounds and 0 pence", () => {
	act(() => {
		render(<Price price={100} />, container);
	});
	expect(container.textContent).toBe("£1.00");
});

it("renders not a number as zero", () => {
	act(() => {
		render(<Price price="?" />, container);
	});
	expect(container.textContent).toBe("£0.00");
});

it("renders 1 as string as 1 pence", () => {
	act(() => {
		render(<Price price="1" />, container);
	});
	expect(container.textContent).toBe("£0.01");
});
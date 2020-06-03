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

it("renders price as pounds and pence", () => {
	act(() => {
		render(<Price price={1} />, container);
	});
	expect(container.textContent).toBe("£0.01");
	
	act(() => {
		render(<Price price={10} />, container);
	});
	expect(container.textContent).toBe("£0.10");

	act(() => {
		render(<Price price={100} />, container);
	});
	expect(container.textContent).toBe("£1.00");
});

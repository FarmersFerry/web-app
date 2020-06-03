import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { queryByAttribute } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

let container = null;
beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it("displays starting total to be £0.00", () => {
	act(() => {
		render(<App />, container);
	});
	const totalDiv = document.querySelector("#total");
	expect(totalDiv.innerHTML).toBe("Price for ferry: <span>£0.00</span>");
});

it("displays starting total to be £0.25", () => {
	act(() => {
		render(<App />, container);
	});
	const button = document.querySelector("#corn-plus-one");

	act(() => {
		button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
	});

	const totalDiv = document.querySelector("#total");
	expect(totalDiv.innerHTML).toBe("Price for ferry: <span>£0.25</span>");
});
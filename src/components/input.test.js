import React from "react";
import Input from "./input";
import { shallow, mount, render } from "enzyme";

describe("<Input/>", () => {
	it("Renders without crashing", () => {
		// let touched, reset, onSaveResponse, handleSubmit;
		// beforeEach(() => {
		// 	touched = false;
		// 	reset = sinon.spy();
		// 	onSaveResponse = Promise.resolve();
		// 	handleSubmit = fn => fn;
		// });

		const props = {
			meta: {
				touched: false
			},
			input: {
				name: ""
			}
		};
		shallow(<Input {...props} />);
	});
});

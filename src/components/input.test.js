import React from "react";
import Input from "./input";
import { shallow, mount, render } from "enzyme";

describe("<Input/>", () => {
	it("Renders without crashing", () => {
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

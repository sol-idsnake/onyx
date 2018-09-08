import React from "react";
import { LoginForm } from "./loginForm";
import { shallow, mount, render } from "enzyme";

describe("<LoginForm/>", () => {
	it("Renders without crashing", () => {
		const props = {
			handleSubmit: () => undefined
		};

		shallow(<LoginForm {...props} />);
	});
});

import React from "react";
import { LoginForm } from "./loginform";
import { shallow, mount, render } from "enzyme";

describe("<LoginForm/>", () => {
	it("Renders without crashing", () => {
		const props = {
			handleSubmit: () => undefined
		};

		shallow(<LoginForm {...props} />);
	});
});

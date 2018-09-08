import React from "react";
import { Register } from "./register";
import { shallow, mount, render } from "enzyme";

describe("<Register/>", () => {
	it("Renders without crashing", () => {
		shallow(<Register />);
	});
});

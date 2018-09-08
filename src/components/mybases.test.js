import React from "react";
import { DashContent } from "./mybases";
import { shallow, mount, render } from "enzyme";

describe("<DashContent/>", () => {
	it("Renders without crashing", () => {
		shallow(<DashContent />);
	});
});

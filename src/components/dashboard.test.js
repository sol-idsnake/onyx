import React from "react";
import { Dashboard } from "./dashboard";
import { shallow, mount, render } from "enzyme";

describe("<Dashboard/>", () => {
	it("Renders without crashing", () => {
		shallow(<Dashboard />);
	});
});

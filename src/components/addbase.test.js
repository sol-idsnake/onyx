import React from "react";
import { AddBase } from "./addbase";
import { shallow, mount, render } from "enzyme";

describe("<AddBase/>", () => {
	it("Renders without crashing", () => {
		shallow(<AddBase />);
	});
});

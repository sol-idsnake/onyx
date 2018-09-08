import React from "react";
import ReactDOM from "react-dom";

import { shallow } from "enzyme";

import AddBase from "./addbase";

describe("<AddBase />", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<AddBase />);
	});
});

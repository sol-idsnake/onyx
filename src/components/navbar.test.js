import React from "react";
import { Navbar } from "./navbar";
import { shallow, mount, render } from "enzyme";

describe("<Navbar/>", () => {
	it("Renders without crashing", () => {
		shallow(<Navbar />);
	});
});

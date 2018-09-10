import React from "react";
import { Sidenav } from "./sidenav";
import { shallow, mount, render } from "enzyme";

describe("<Sidenav/>", () => {
	it("Renders without crashing", () => {
		const username = "";

		shallow(<Sidenav username={username} />);
	});
});

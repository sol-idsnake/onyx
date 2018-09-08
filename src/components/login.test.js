import React from "react";
import { LoginPage } from "./login";
import { shallow, mount, render } from "enzyme";

describe("<LoginPage/>", () => {
	it("Renders without crashing", () => {
		shallow(<LoginPage />);
	});
});

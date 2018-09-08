import React from "react";
import { LandingPage } from "./landingpage";
import { shallow, mount, render } from "enzyme";

describe("<LandingPage/>", () => {
	it("Renders without crashing", () => {
		shallow(<LandingPage />);
	});
});

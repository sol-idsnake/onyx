import React from "react";
import UserChat from "./userlist";
import { shallow, mount, render } from "enzyme";

describe("<UserChat/>", () => {
	it("Renders without crashing", () => {
		shallow(<UserChat />);
	});
});

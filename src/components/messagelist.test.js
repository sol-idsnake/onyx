import React from "react";
import MessageList from "./messagelist";
import { shallow, mount, render } from "enzyme";

describe("<MessageList/>", () => {
	it("Renders without crashing", () => {
		shallow(<MessageList />);
	});
});

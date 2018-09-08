import React from "react";
import ConnectedBasePage, { BasePage } from "./basepage";
import { shallow, mount, render } from "enzyme";
import { Route, Link, MemoryRouter } from "react-router-dom";

describe("<BasePage/>", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(
			<MemoryRouter>
				<BasePage />
			</MemoryRouter>
		);
	});
});

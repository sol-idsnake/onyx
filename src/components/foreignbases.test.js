import React from "react";
import { ForeignBases } from "./foreignbases";
import { shallow, mount, render } from "enzyme";

describe("<ForeignBases/>", () => {
	it("Renders without crashing", () => {
		shallow(<ForeignBases />);
	});
});

import React from "react";
import { RegistrationForm } from "./registrationForm";
import { shallow, mount, render } from "enzyme";

describe("<RegistrationForm/>", () => {
	it("Renders without crashing", () => {
		const props = {
			handleSubmit: () => undefined
		};

		shallow(<RegistrationForm {...props} />);
	});
});

import React from "react";
import ReactDOM from "react-dom";

import { shallow } from "enzyme";

import AddBase from "./addbase";

describe("<AddBase />", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<AddBase />);
	});

	it("dispatches onAdd from onSubmit", () => {
		const seedBase = [];
		beforeAll(() => {
			for (let i = 0; i < 10; i++) {
				seedBase.push({
					text: `Base ${i}`
				});
			}
		});
		const dispatch = jest.fn();
		const wrapper = shallow(<AddBase dispatch={dispatch} />);

		const instance = wrapper.instance();
		const base = seedBase[0].text;
		instance.onAdd(base);
		expect(dispatch).toHaveBeenCalledWith(onAdd(base));
	});
});

import interactionReducer from "./interaction";
import { fetchBasesByCreatorIdSuccess } from "../actions/interaction";

describe("interactionReducer", () => {
	const base1Id = "5b9";
	const baseCreator = "5b8";
	const baseTitle = "testBase1";
	const base = {
		id: base1Id,
		creatorId: baseCreator,
		title: baseTitle
	};
	const initialState = {
		bases: [],
		foreignBases: [],
		currentBase: {
			base: {},
			users: [],
			messages: []
		},
		editing: false,
		loading: false,
		error: null
	};

	it("Should set the initial state", () => {
		const state = interactionReducer(undefined, { type: "__UNKNOWN" });
		expect(state).toEqual(initialState);
	});

	it("Should return the current state on an unknown action", () => {
		let currentState = {};
		const state = interactionReducer(currentState, { type: "__UNKNOWN" });
		expect(state).toBe(currentState);
	});

	describe("fetchBasesByCreatorIdSuccess", () => {
		it("should fetch my own bases", () => {
			let state;
			state = interactionReducer(
				state,
				fetchBasesByCreatorIdSuccess([{ base }])
			);
			expect(state).toEqual({
				...state,
				bases: [{ base }]
			});
		});
	});
});

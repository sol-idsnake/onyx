import {
	FETCH_BASES_BY_CREATOR_ID_SUCCESS,
	fetchBasesByCreatorIdSuccess
} from "./interaction";

describe("fetchBasesByCreatorIdSuccess", () => {
	it("should return the action", () => {
		const bases = "";
		const action = fetchBasesByCreatorIdSuccess(bases);
		expect(action.type).toEqual(FETCH_BASES_BY_CREATOR_ID_SUCCESS);
		expect(action.bases).toEqual("");
	});
});

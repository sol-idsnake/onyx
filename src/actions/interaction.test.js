import {
	fetchBasesByCreatorId,
	FETCH_BASES_BY_CREATOR_ID_SUCCESS,
	fetchBasesByCreatorIdSuccess,
	addBaseToDb,
	ADD_BASE_SUCCESS,
	addBaseSuccess,
	removeBase,
	removeBaseSuccess,
	REMOVE_BASE_SUCCESS,
	fetchForeignBases,
	fetchForeignBasesSuccess,
	FETCH_FOREIGN_BASES_SUCCESS,
	fetchSingleBase,
	fetchSingleBaseSuccess,
	FETCH_SINGLE_BASE_SUCCESS,
	addUserToList,
	addUserToListSuccess,
	ADD_USER_TO_LIST_SUCCESS,
	deleteUserFromBase,
	deleteUserFromBaseSuccess,
	DELETE_USER_FROM_BASE_SUCCESS,
	modifier,
	modifyValueSuccess,
	MODIFY_VALUE_SUCCESS,
	addMessageToList,
	addMessageToListSuccess,
	ADD_MESSAGE_TO_LIST_SUCCESS,
	deleteMessage,
	deleteMessageSuccess,
	DELETE_MESSAGE_SUCCESS
} from "./interaction";
import { API_BASE_URL } from "../config";

describe("fetchBases", () => {
	it("should return the action", () => {
		const bases = [];
		const action = fetchBasesByCreatorIdSuccess(bases);
		expect(action.type).toEqual(FETCH_BASES_BY_CREATOR_ID_SUCCESS);
		expect(action.bases).toEqual(bases);
	});
});

describe("fetchBasesByCreatorIdSuccess", () => {
	it("Should return the action", () => {
		const bases = [];

		const action = fetchBasesByCreatorIdSuccess(bases);
		expect(action.type).toEqual(FETCH_BASES_BY_CREATOR_ID_SUCCESS);
		expect(action.bases).toEqual(bases);
	});
});

describe("addBaseToDbSuccess", () => {
	it("should return the action", () => {
		const base = {};
		const action = addBaseSuccess(base);
		expect(action.type).toEqual(ADD_BASE_SUCCESS);
		expect(action.base).toEqual(base);
	});
});

describe("removeBaseSuccess", () => {
	it("should return the action", () => {
		const id = "";
		const action = removeBaseSuccess(id);
		expect(action.type).toEqual(REMOVE_BASE_SUCCESS);
		expect(action.id).toEqual(id);
	});
});

describe("fetchForeignBasesSuccess", () => {
	it("should return the action", () => {
		const foreignBases = [];
		const action = fetchForeignBasesSuccess(foreignBases);
		expect(action.type).toEqual(FETCH_FOREIGN_BASES_SUCCESS);
		expect(action.foreignBases).toEqual(foreignBases);
	});
});

describe("fetchSingleBase", () => {
	it("should return the action", () => {
		const data = {};
		const action = fetchSingleBaseSuccess(data);
		expect(action.type).toEqual(FETCH_SINGLE_BASE_SUCCESS);
		expect(action.data).toEqual(data);
	});
});

describe("addUserToList", () => {
	it("should return the action", () => {
		const user = undefined;
		const action = addUserToListSuccess(user);
		expect(action.type).toEqual(ADD_USER_TO_LIST_SUCCESS);
		expect(action.data).toEqual(user);
	});
});

describe("deleteUserFromBase", () => {
	it("should return the action", () => {
		const data = {};
		const action = deleteUserFromBaseSuccess(data);
		expect(action.type).toEqual(DELETE_USER_FROM_BASE_SUCCESS);
		expect(action.data).toEqual(data);
	});
});

describe("modifier", () => {
	it("should return the action", () => {
		const baseUser = {};
		const action = modifyValueSuccess(baseUser);
		expect(action.type).toEqual(MODIFY_VALUE_SUCCESS);
		expect(action.baseUser).toEqual(baseUser);
	});
});

describe("addMessageToList", () => {
	it("should return the action", () => {
		const message = "";
		const action = addMessageToListSuccess(message);
		expect(action.type).toEqual(ADD_MESSAGE_TO_LIST_SUCCESS);
		expect(action.message).toEqual(message);
	});
});

describe("deleteMessage", () => {
	it("should return the action", () => {
		const message = {};
		const action = deleteMessageSuccess(message);
		expect(action.type).toEqual(DELETE_MESSAGE_SUCCESS);
		expect(action.message).toEqual(message);
	});
});

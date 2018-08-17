import { API_BASE_URL } from "../config";
import { add } from "./apis";
import fetch from "cross-fetch";

export const SET_EDITING = "SET_EDITING";
export const setEditing = editing => ({
	type: SET_EDITING,
	editing
});

export const ADD_BASE_REQUEST = "ADD_BASE_REQUEST";
export const addBaseRequest = () => ({
	type: ADD_BASE_REQUEST
});

export const ADD_BASE_SUCCESS = "ADD_BASE_SUCESS";
export const addBaseSuccess = base => ({
	type: ADD_BASE_SUCCESS,
	base
});

export const ADD_BASE_ERROR = "ADD_BASE_ERROR";
export const addBaseError = error => ({
	type: ADD_BASE_ERROR,
	error
});

export const addBaseToDb = (userId, title) => dispatch => {
	dispatch(addBaseRequest());
	add(userId, title)
		.then(base => dispatch(addBaseSuccess(base)))
		.catch(error => dispatch(addBaseError(error)));
};

export const FETCH_BASES_REQUEST = "FETCH_BASE_REQUEST";
export const fetchBasesRequest = () => ({
	type: FETCH_BASES_REQUEST
});

export const FETCH_BASES_SUCCESS = "FETCH_BASES_SUCCESS";
export const fetchBasesSuccess = bases => ({
	type: FETCH_BASES_SUCCESS,
	bases
});

export const FETCH_BASES_ERROR = "FETCH_BASE_ERROR";
export const fetchBasesError = error => ({
	type: FETCH_BASES_ERROR,
	error
});

export const fetchBases = () => dispatch => {
	dispatch(fetchBasesRequest());
	fetch(`${API_BASE_URL}/base/list`, {
		method: "GET"
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(bases => dispatch(fetchBasesSuccess(bases)))
		.catch(error => dispatch(fetchBasesError(error)));
};

export const REMOVE_BASE_REQUEST = "REMOVE_BASE_REQUEST";
export const removeBaseRequest = () => ({
	type: REMOVE_BASE_REQUEST
});

export const REMOVE_BASE_SUCCESS = "REMOVE_BASE_SUCCESS";
export const removeBaseSuccess = id => ({
	type: REMOVE_BASE_SUCCESS,
	id
});

export const REMOVE_BASE_ERROR = "REMOVE_BASE_ERROR";
export const removeBaseError = () => ({
	type: REMOVE_BASE_ERROR
});

export const removeBase = id => dispatch => {
	dispatch(removeBaseRequest());
	fetch(`${API_BASE_URL}/base/delete`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			id: id
		})
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return true;
		})
		.then(() => dispatch(removeBaseSuccess(id)))
		.catch(error => dispatch(removeBaseError(error)));
};

export const fetchUsers = id => dispatch => {
	dispatch(fetchUsersRequest());
	fetch(`${API_BASE_URL}/addUser/${id}`, {
		method: "GET"
	})
		.then(res => console.log(res))
		.then(dispatch(fetchUsersSuccess(users)))
		.catch(error => dispatch(fetchUsersError(error)));
};

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const fetchUsersRequest = () => ({
	type: FETCH_USERS_REQUEST
});

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const fetchUsersSuccess = users => ({
	type: FETCH_USERS_SUCCESS,
	users
});

export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
export const fetchUsersError = () => ({
	type: FETCH_USERS_ERROR
});

//  look up js promises

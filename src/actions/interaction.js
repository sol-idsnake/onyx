import { API_BASE_URL } from "../config";
// import { add } from "./apis";
import fetch from "cross-fetch";

export const fetchBases = () => dispatch => {
	dispatch(fetchBasesRequest());
	fetch(`${API_BASE_URL}/baselist/list`, {
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

export const fetchSingleBase = baseId => dispatch => {
	dispatch(fetchSingleBaseRequest());
	fetch(`${API_BASE_URL}/user-message/${baseId}`, {
		method: "GET",
		dataType: "json"
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(base => dispatch(fetchSingleBaseSuccess(base)))
		.catch(error => dispatch(fetchSingleBaseError(error)));
};

export const addBaseToDb = (userId, title) => dispatch => {
	dispatch(addBaseRequest());
	fetch(`${API_BASE_URL}/baselist/add`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
			// add auth token
		},
		body: JSON.stringify({
			userId: userId,
			title: title
		})
	})
		.then(res => {
			console.log(res);
			return res.json();
		})
		.catch(error => {
			console.log("Request failed", error);
		})
		.then(base => dispatch(addBaseSuccess(base)))
		.catch(error => dispatch(addBaseError(error)));
};

export const removeBase = id => dispatch => {
	dispatch(removeBaseRequest());
	fetch(`${API_BASE_URL}/baselist/delete`, {
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

export const addUserToList = (baseId, userName) => dispatch => {
	dispatch(addUserToListRequest());
	fetch(`${API_BASE_URL}/user-message/${baseId}/user`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
			// add auth token
		},
		body: JSON.stringify({
			baseId: baseId,
			userName: userName
		})
	})
		// If .then does not 'return' an object, the next .then statement will get passed 'null', and it breaks
		// .then(res => console.log(res))
		.then(res => {
			return res.json();
		})
		.then(base => dispatch(addUserToListSuccess(base)))
		.catch(error => {
			console.log("Request failed", error);
		});
};

export const addMessageToList = (baseId, message) => dispatch => {
	dispatch(addMessageToListRequest());
	fetch(`${API_BASE_URL}/user-message/${baseId}/message`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			baseId,
			message
		})
	})
		.then(res => {
			return res.json();
		})
		.then(message => dispatch(addMessageToListSuccess(message)))
		.catch(error => {
			console.log("Request failed", error);
		});
};

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
export const removeBaseError = error => ({
	type: REMOVE_BASE_ERROR,
	error
});

export const FETCH_SINGLE_BASE_REQUEST = "FETCH_SINGLE_BASE_REQUEST";
export const fetchSingleBaseRequest = () => ({
	type: FETCH_SINGLE_BASE_REQUEST
});

export const FETCH_SINGLE_BASE_SUCCESS = "FETCH_SINGLE_BASE_SUCCESS";
export const fetchSingleBaseSuccess = base => ({
	type: FETCH_SINGLE_BASE_SUCCESS,
	base
});

export const FETCH_SINGLE_BASE_ERROR = "FETCH_SINGLE_BASE_ERROR";
export const fetchSingleBaseError = error => ({
	type: FETCH_SINGLE_BASE_ERROR,
	error
});

export const ADD_USER_TO_LIST_REQUEST = "ADD_USER_TO_LIST_REQUEST";
export const addUserToListRequest = () => ({
	type: ADD_USER_TO_LIST_REQUEST
});

export const ADD_USER_TO_LIST_SUCCESS = "ADD_USER_TO_LIST_SUCCESS";
export const addUserToListSuccess = base => ({
	type: ADD_USER_TO_LIST_SUCCESS,
	base
});

export const ADD_USER_TO_LIST_ERROR = "ADD_USER_TO_LIST_ERROR";
export const addUserToListError = error => ({
	type: ADD_USER_TO_LIST_ERROR,
	error
});

export const ADD_MESSAGE_TO_LIST_REQUEST = "ADD_MESSAGE_TO_LIST_REQUEST";
export const addMessageToListRequest = () => ({
	type: ADD_MESSAGE_TO_LIST_REQUEST
});

export const ADD_MESSAGE_TO_LIST_SUCCESS = "ADD_MESSAGE_TO_LIST_SUCCESS";
export const addMessageToListSuccess = base => ({
	type: ADD_MESSAGE_TO_LIST_SUCCESS,
	base
});

export const ADD_MESSAGE_TO_LIST_ERROR = "ADD_MESSAGE_TO_LIST_ERROR";
export const addMessageToListError = error => ({
	type: ADD_MESSAGE_TO_LIST_ERROR,
	error
});
//  look up js promises

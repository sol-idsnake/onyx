import { API_BASE_URL } from "../config";
import fetch from "cross-fetch";
require("dotenv").config();

// Changes state when adding a base
export const SET_EDITING = "SET_EDITING";
export const setEditing = editing => ({
	type: SET_EDITING,
	editing
});

///////////////////////////////////
// Dashcontent fetches all bases created by the current User
///////////////////////////////////
export const fetchBasesByCreatorId = (creatorId, access_token) => dispatch => {
	dispatch(fetchBasesByCreatorIdRequest());
	fetch(`${API_BASE_URL}/baselist/list/${creatorId}`, {
		method: "GET",
		headers: {
			authorization: `Bearer ${access_token}`
		}
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(bases => dispatch(fetchBasesByCreatorIdSuccess(bases)))
		.catch(error => dispatch(fetchBasesByCreatorIdError(error)));
};

export const FETCH_BASES_BY_CREATOR_ID_REQUEST =
	"FETCH_BASES_BY_CREATOR_ID_REQUEST";
export const fetchBasesByCreatorIdRequest = () => ({
	type: FETCH_BASES_BY_CREATOR_ID_REQUEST
});

export const FETCH_BASES_BY_CREATOR_ID_SUCCESS =
	"FETCH_BASES_BY_CREATOR_ID_SUCCESS";
export const fetchBasesByCreatorIdSuccess = bases => ({
	type: FETCH_BASES_BY_CREATOR_ID_SUCCESS,
	bases
});

export const FETCH_BASES_BY_CREATOR_ID_ERROR =
	"FETCH_BASES_BY_CREATOR_ID_ERROR";
export const fetchBasesByCreatorIdError = error => ({
	type: FETCH_BASES_BY_CREATOR_ID_ERROR,
	error
});

///////////////////////////////////
// addbase.js Add base to DB
///////////////////////////////////
export const addBaseToDb = (
	userId,
	title,
	username,
	access_token
) => dispatch => {
	dispatch(addBaseRequest());
	fetch(`${API_BASE_URL}/baselist/add`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${access_token}`

			// add auth token
		},
		body: JSON.stringify({
			userId,
			title,
			username
		})
	})
		.then(res => {
			return res.json();
		})
		.then(base => dispatch(addBaseSuccess(base)))
		.catch(error => dispatch(addBaseError(error)));
};

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

///////////////////////////////////
// Remove Base and users from base
///////////////////////////////////
export const removeBase = (id, access_token) => dispatch => {
	dispatch(removeBaseRequest());
	fetch(`${API_BASE_URL}/baselist/delete`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${access_token}`
		},
		body: JSON.stringify({
			id
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

///////////////////////////////////
// Fetch foreign bases/userlist on foreignbases.js
///////////////////////////////////
export const fetchForeignBases = (userId, access_token) => dispatch => {
	dispatch(fetchForeignBasesRequest());
	fetch(`${API_BASE_URL}/user-message/foreignbases/${userId}`, {
		method: "GET",
		headers: {
			authorization: `Bearer ${access_token}`
		}
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(bases => dispatch(fetchForeignBasesSuccess(bases)))
		.catch(error => dispatch(fetchForeignBasesError(error)));
};

export const FETCH_FOREIGN_BASES_REQUEST = "FETCH_FOREIGN_BASES_REQUEST";
export const fetchForeignBasesRequest = () => ({
	type: FETCH_FOREIGN_BASES_REQUEST
});

export const FETCH_FOREIGN_BASES_SUCCESS = "FETCH_FOREIGN_BASES_SUCCESS";
export const fetchForeignBasesSuccess = foreignBases => ({
	type: FETCH_FOREIGN_BASES_SUCCESS,
	foreignBases
});

export const FETCH_FOREIGN_BASES_ERROR = "FETCH_FOREIGN_BASES_ERROR";
export const fetchForeignBasesError = error => ({
	type: FETCH_FOREIGN_BASES_ERROR,
	error
});

///////////////////////////////////
// Fetch single base, to include members and messages
///////////////////////////////////
export const fetchSingleBase = (baseId, access_token) => dispatch => {
	dispatch(fetchSingleBaseRequest());
	fetch(`${API_BASE_URL}/baselist/single-base/${baseId}`, {
		method: "GET",
		headers: {
			authorization: `Bearer ${access_token}`
		}
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(data => dispatch(fetchSingleBaseSuccess(data)))
		.then(error => dispatch(fetchSingleBaseError(error)));
};

export const FETCH_SINGLE_BASE_REQUEST = "FETCH_SINGLE_BASE_REQUEST";
export const fetchSingleBaseRequest = () => ({
	type: FETCH_SINGLE_BASE_REQUEST
});

export const FETCH_SINGLE_BASE_SUCCESS = "FETCH_SINGLE_BASE_SUCCESS";
export const fetchSingleBaseSuccess = data => ({
	type: FETCH_SINGLE_BASE_SUCCESS,
	data
});

export const FETCH_SINGLE_BASE_ERROR = "FETCH_SINGLE_BASE_ERROR";
export const fetchSingleBaseError = error => ({
	type: FETCH_SINGLE_BASE_ERROR,
	error
});

///////////////////////////////////
// Add user to DB via userlist.js
///////////////////////////////////
export const addUserToList = (baseId, userName, access_token) => dispatch => {
	dispatch(addUserToListRequest());
	fetch(`${API_BASE_URL}/user-message/addUser`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${access_token}`
		},
		body: JSON.stringify({
			baseId,
			userName
		})
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(user => dispatch(addUserToListSuccess(user)))
		.then(error => dispatch(addUserToListError(error)));
};

export const ADD_USER_TO_LIST_REQUEST = "ADD_USER_TO_LIST_REQUEST";
export const addUserToListRequest = () => ({
	type: ADD_USER_TO_LIST_REQUEST
});

export const ADD_USER_TO_LIST_SUCCESS = "ADD_USER_TO_LIST_SUCCESS";
export const addUserToListSuccess = user => ({
	type: ADD_USER_TO_LIST_SUCCESS,
	user
});

export const ADD_USER_TO_LIST_ERROR = "ADD_USER_TO_LIST_ERROR";
export const addUserToListError = error => ({
	type: ADD_USER_TO_LIST_ERROR,
	error
});

///////////////////////////////////
// Remove user from DB when clicking X in the user list
///////////////////////////////////
export const deleteUserFromBase = (
	baseId,
	username,
	access_token
) => dispatch => {
	dispatch(deleteUserFromBaseRequest());
	fetch(`${API_BASE_URL}/user-message/userDelete/`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${access_token}`
		},
		body: JSON.stringify({
			baseId,
			username
		})
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(data => dispatch(deleteUserFromBaseSuccess(data)))
		.then(error => dispatch(deleteUserFromBaseError(error)));
};

export const DELETE_USER_FROM_BASE_REQUEST = "DELETE_USER_FROM_BASE_REQUEST";
export const deleteUserFromBaseRequest = () => ({
	type: DELETE_USER_FROM_BASE_REQUEST
});

export const DELETE_USER_FROM_BASE_SUCCESS = "DELETE_USER_FROM_BASE_SUCCESS";
export const deleteUserFromBaseSuccess = data => ({
	type: DELETE_USER_FROM_BASE_SUCCESS,
	data
});

export const DELETE_USER_FROM_BASE_ERROR = "DELETE_USER_FROM_BASE_ERROR";
export const deleteUserFromBaseError = error => ({
	type: DELETE_USER_FROM_BASE_ERROR,
	error
});

///////////////////////////////////
// When the user accepts membership into a base on foreignbases.js
///////////////////////////////////
export const modifier = (bool, baseId, username, access_token) => dispatch => {
	dispatch(modifyValueRequest());
	fetch(`${API_BASE_URL}/user-message/modify`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${access_token}`
		},
		body: JSON.stringify({ bool, baseId, username })
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(baseUser => dispatch(modifyValueSuccess(baseUser)))
		.catch(error => dispatch(modifyValueError(error)));
};

export const MODIFY_VALUE_REQUEST = "MODIFY_VALUE_REQUEST";
export const modifyValueRequest = () => ({
	type: MODIFY_VALUE_REQUEST
});

export const MODIFY_VALUE_SUCCESS = "MODIFY_VALUE_SUCCESS";
export const modifyValueSuccess = baseUser => ({
	type: MODIFY_VALUE_SUCCESS,
	baseUser
});

export const MODIFY_VALUE_ERROR = "MODIFY_VALUE_ERROR";
export const modifyValueError = error => ({
	type: MODIFY_VALUE_ERROR,
	error
});

///////////////////////////////////
// Add a message to the DB in messagelist.js
///////////////////////////////////
export const addMessageToList = (baseId, content, access_token) => dispatch => {
	dispatch(addMessageToListRequest());
	fetch(`${API_BASE_URL}/user-message/messageAdd`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${access_token}`
		},
		body: JSON.stringify({
			baseId,
			content
		})
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(message => dispatch(addMessageToListSuccess(message)))
		.catch(error => dispatch(addMessageToListError(error)));
};

export const ADD_MESSAGE_TO_LIST_REQUEST = "ADD_MESSAGE_TO_LIST_REQUEST";
export const addMessageToListRequest = () => ({
	type: ADD_MESSAGE_TO_LIST_REQUEST
});

export const ADD_MESSAGE_TO_LIST_SUCCESS = "ADD_MESSAGE_TO_LIST_SUCCESS";
export const addMessageToListSuccess = message => ({
	type: "ADD_MESSAGE_TO_LIST_SUCCESS",
	message
});

export const ADD_MESSAGE_TO_LIST_ERROR = "ADD_MESSAGE_TO_LIST_ERROR";
export const addMessageToListError = error => ({
	type: ADD_MESSAGE_TO_LIST_ERROR,
	error
});

///////////////////////////////////
// Delete a message from the DB in messagelist.js
///////////////////////////////////
export const deleteMessage = (messageId, access_token) => dispatch => {
	dispatch(deleteMessageRequest());
	fetch(`${API_BASE_URL}/user-message/deleteMsg/${messageId}`, {
		method: "DELETE",
		headers: {
			authorization: `Bearer ${access_token}`
		}
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return true;
		})
		.then(() => dispatch(deleteMessageSuccess(messageId)))
		.then(error => dispatch(deleteMessageError(error)));
};

export const DELETE_MESSAGE_REQUEST = "DELETE_MESSAGE_REQUEST";
export const deleteMessageRequest = () => ({
	type: "DELETE_MESSAGE_REQUEST"
});

export const DELETE_MESSAGE_SUCCESS = "DELETE_MESSAGE_SUCCESS";
export const deleteMessageSuccess = message => ({
	type: "DELETE_MESSAGE_SUCCESS",
	message
});

export const DELETE_MESSAGE_ERROR = "DELETE_MESSAGE_ERROR";
export const deleteMessageError = error => ({
	type: "DELETE_MESSAGE_ERROR",
	error
});

//  look up js promises

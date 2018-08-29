import { API_BASE_URL } from "../config";
import fetch from "cross-fetch";

// Changes state when adding a base
export const SET_EDITING = "SET_EDITING";
export const setEditing = editing => ({
	type: SET_EDITING,
	editing
});

///////////////////////////////////
// Dashcontent fetches all bases created by the current User
///////////////////////////////////
export const fetchBasesByCreatorId = creatorId => dispatch => {
	dispatch(fetchBasesByCreatorIdRequest());
	fetch(`${API_BASE_URL}/baselist/list/${creatorId}`, {
		method: "GET"
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
export const addBaseToDb = (userId, title) => dispatch => {
	dispatch(addBaseRequest());
	fetch(`${API_BASE_URL}/baselist/add`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
			// add auth token
		},
		body: JSON.stringify({
			userId,
			title
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
export const removeBase = id => dispatch => {
	dispatch(removeBaseRequest());
	fetch(`${API_BASE_URL}/baselist/delete`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
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
export const fetchForeignBases = userId => dispatch => {
	dispatch(fetchForeignBasesRequest());
	fetch(`${API_BASE_URL}/user-message/foreignbases/${userId}`, {
		method: "GET"
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
export const fetchSingleBase = baseId => dispatch => {
	dispatch(fetchSingleBaseRequest());
	fetch(`${API_BASE_URL}/baselist/single-base/${baseId}`, {
		method: "GET"
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
export const addUserToList = (
	baseId,
	userName,
	acceptedMembership,
	isCreator
) => dispatch => {
	dispatch(addUserToListRequest());
	fetch(`${API_BASE_URL}/user-message/addUser`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			baseId,
			userName,
			acceptedMembership,
			isCreator
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
export const deleteUserFromBase = (baseId, userId) => dispatch => {
	dispatch(deleteUserFromBaseRequest());
	console.log(userId);
	fetch(`${API_BASE_URL}/user-message/userDelete/${baseId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			userId
		})
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			// return true;
		})
		.then(() => dispatch(deleteUserFromBaseSuccess(userId)))
		.then(error => dispatch(deleteUserFromBaseError(error)));
};

export const DELETE_USER_FROM_BASE_REQUEST = "DELETE_USER_FROM_BASE_REQUEST";
export const deleteUserFromBaseRequest = () => ({
	type: DELETE_USER_FROM_BASE_REQUEST
});

export const DELETE_USER_FROM_BASE_SUCCESS = "DELETE_USER_FROM_BASE_SUCCESS";
export const deleteUserFromBaseSuccess = timeStamp => ({
	type: DELETE_USER_FROM_BASE_SUCCESS,
	timeStamp
});

export const DELETE_USER_FROM_BASE_ERROR = "DELETE_USER_FROM_BASE_ERROR";
export const deleteUserFromBaseError = error => ({
	type: DELETE_USER_FROM_BASE_ERROR,
	error
});

///////////////////////////////////
// When the user accepts membership into a base on foreignbases.js
///////////////////////////////////
export const modifier = (bool, baseId) => dispatch => {
	dispatch(modifyValueRequest());
	fetch(`${API_BASE_URL}/user-message/modify`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ bool, baseId })
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

// // For when the user looks at a single Base
// export const fetchUsersOfList = userId => dispatch => {
// 	console.log(userId);
// 	dispatch(fetchUsersOfListRequest());
// 	fetch(`${API_BASE_URL}/user-message/list/${userId}`, {
// 		method: "GET"
// 	})
// 		.then(res => {
// 			if (!res.ok) {
// 				return Promise.reject(res.statusText);
// 			}
// 			console.log(res);
// 			return res.json();
// 		})
// 		.then(users => dispatch(fetchUsersOfListSuccess(users)))
// 		.catch(error => dispatch(fetchUsersOfListError(error)));
// };

// export const FETCH_USERS_OF_LIST_REQUEST = "FETCH_USERS_OF_LIST_REQUEST";
// export const fetchUsersOfListRequest = () => ({
// 	type: FETCH_USERS_OF_LIST_REQUEST
// });

// export const FETCH_USERS_OF_LIST_SUCCESS = "FETCH_USERS_OF_LIST_SUCCESS";
// export const fetchUsersOfListSuccess = users => ({
// 	type: FETCH_USERS_OF_LIST_SUCCESS,
// 	users
// });

// export const FETCH_USERS_OF_LIST_ERROR = "FETCH_USERS_OF_LIST_ERROR";
// export const fetchUsersOfListError = error => ({
// 	type: FETCH_USERS_OF_LIST_ERROR,
// 	error
// });

// export const FETCH_BASES_BY_USERNAME_REQUEST =
// 	"FETCH_BASES_BY_USERNAME_REQUEST";
// export const fetchBasesByUsernameRequest = () => ({
// 	type: FETCH_BASES_BY_USERNAME_REQUEST
// });

// export const FETCH_BASES_BY_USERNAME_SUCCESS =
// 	"FETCH_BASES_BY_USERNAME_SUCCESS";
// // export const fetchBasesByUsernameSuccess = foreignBases => ({
// // 	type: FETCH_BASES_BY_USERNAME_SUCCESS,
// // 	foreignBases
// // });

// export function fetchBasesByUsernameSuccess(foreignBases) {
// 	console.log(foreignBases);
// 	return {
// 		type: FETCH_BASES_BY_USERNAME_SUCCESS,
// 		foreignBases
// 	};
// }

// export const FETCH_BASES_BY_USERNAME_ERROR = "FETCH_BASES_BY_USERNAME_ERROR";
// export const fetchBasesByUsernameError = error => ({
// 	type: FETCH_BASES_BY_USERNAME_ERROR,
// 	error
// });

//  look up js promises

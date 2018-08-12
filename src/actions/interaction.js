import { API_BASE_URL } from "../config";
import { add } from "./apis";
import fetch from "cross-fetch";

export const SET_EDITING = "SET_EDITING";
export const setEditing = editing => ({
	type: SET_EDITING,
	editing,
});

export const ADD_BASE_REQUEST = "ADD_BASE_REQUEST";
export const addBaseRequest = () => ({
	type: ADD_BASE_REQUEST,
});

export const ADD_BASE_SUCCESS = "ADD_BASE_SUCESS";
export const addBaseSuccess = base => ({
	type: ADD_BASE_SUCCESS,
	base,
});

export const ADD_BASE_ERROR = "ADD_BASE_ERROR";
export const addBaseError = error => ({
	type: ADD_BASE_ERROR,
	error,
});

export const addBaseToDb = (userId, title) => dispatch => {
	dispatch(addBaseRequest());
	add(userId, title)
		.then(base => dispatch(addBaseSuccess(base)))
		.catch(error => dispatch(addBaseError(error)));
};

export const FETCH_BASES_REQUEST = "FETCH_BASE_REQUEST";
export const fetchBasesRequest = () => ({
	type: FETCH_BASES_REQUEST,
});

export const FETCH_BASES_SUCCESS = "FETCH_BASES_SUCCESS";
export const fetchBasesSuccess = bases => ({
	type: FETCH_BASES_SUCCESS,
	bases,
});

export const FETCH_BASES_ERROR = "FETCH_BASE_ERROR";
export const fetchBasesError = error => ({
	type: FETCH_BASES_ERROR,
	error,
});

export const fetchBases = () => dispatch => {
	dispatch(fetchBasesRequest());
	fetch(`${API_BASE_URL}/base/list`, {
		method: "GET",
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

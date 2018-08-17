import {
	SET_EDITING,
	FETCH_BASES_REQUEST,
	FETCH_BASES_SUCCESS,
	FETCH_BASES_ERROR,
	ADD_BASE_REQUEST,
	ADD_BASE_SUCCESS,
	ADD_BASE_ERROR,
	REMOVE_BASE_REQUEST,
	REMOVE_BASE_SUCCESS,
	REMOVE_BASE_ERROR,
	FETCH_USERS_REQUEST
} from "../actions/interaction";

const initialState = {
	bases: [],
	editing: false,
	loading: false,
	error: null
};

export default function interactionReducer(state = initialState, action) {
	if (action.type === FETCH_BASES_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === FETCH_BASES_SUCCESS) {
		return Object.assign({}, state, {
			bases: [...action.bases],
			loading: false,
			error: null
		});
	} else if (action.type === FETCH_BASES_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	} else if (action.type === SET_EDITING) {
		return Object.assign({}, state, {
			editing: action.editing
		});
	} else if (action.type === ADD_BASE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === ADD_BASE_SUCCESS) {
		return Object.assign({}, state, {
			bases: [...state.bases, action.base]
		});
	} else if (action.type === ADD_BASE_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	} else if (action.type === REMOVE_BASE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === REMOVE_BASE_SUCCESS) {
		const newArray = state.bases.filter(base => base.id !== action.id);
		return Object.assign({}, state, {
			bases: newArray,
			loading: false,
			error: null
		});
	} else if (action.type === REMOVE_BASE_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	} else if (action.type === FETCH_USERS_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	}
	return state;
}

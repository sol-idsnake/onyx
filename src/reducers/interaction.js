import {
	SET_EDITING,
	FETCH_BASES_BY_CREATOR_ID_REQUEST,
	FETCH_BASES_BY_CREATOR_ID_SUCCESS,
	FETCH_BASES_BY_CREATOR_ID_ERROR,
	// 	FETCH_BASES_REQUEST,
	// 	FETCH_BASES_SUCCESS,
	// 	FETCH_BASES_ERROR,
	ADD_BASE_REQUEST,
	ADD_BASE_SUCCESS,
	ADD_BASE_ERROR,
	REMOVE_BASE_REQUEST,
	REMOVE_BASE_SUCCESS,
	REMOVE_BASE_ERROR,
	FETCH_FOREIGN_BASES_REQUEST,
	FETCH_FOREIGN_BASES_SUCCESS,
	FETCH_FOREIGN_BASES_ERROR,
	FETCH_SINGLE_BASE_REQUEST,
	FETCH_SINGLE_BASE_SUCCESS,
	FETCH_SINGLE_BASE_ERROR,
	ADD_USER_TO_LIST_REQUEST,
	ADD_USER_TO_LIST_SUCCESS,
	ADD_USER_TO_LIST_ERROR,
	DELETE_USER_FROM_BASE_REQUEST,
	DELETE_USER_FROM_BASE_SUCCESS,
	DELETE_USER_FROM_BASE_ERROR
	// 	FETCH_USERS_OF_LIST_REQUEST,
	// 	FETCH_USERS_OF_LIST_SUCCESS,
	// 	FETCH_USERS_OF_LIST_ERROR,
	// 	MODIFY_VALUE_REQUEST,
	// 	MODIFY_VALUE_SUCCESS,
	// 	MODIFY_VALUE_ERROR,
	// 	FETCH_BASES_BY_USERNAME_REQUEST,
	// 	FETCH_BASES_BY_USERNAME_SUCCESS,
	// 	FETCH_BASES_BY_USERNAME_ERROR
} from "../actions/interaction";

const initialState = {
	bases: [],
	foreignBases: [],
	// userBases: [],
	currentBase: {
		users: []
	},
	editing: false,
	loading: false,
	error: null
};

export default function interactionReducer(state = initialState, action) {
	if (action.type === FETCH_BASES_BY_CREATOR_ID_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === FETCH_BASES_BY_CREATOR_ID_SUCCESS) {
		return Object.assign({}, state, {
			bases: [...action.bases],
			loading: false,
			error: null
		});
	} else if (action.type === FETCH_BASES_BY_CREATOR_ID_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	} else if (action.type === ADD_BASE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === ADD_BASE_SUCCESS) {
		return Object.assign({}, state, {
			bases: [...state.bases, action.base],
			loading: false
		});
	} else if (action.type === ADD_BASE_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	} else if (action.type === SET_EDITING) {
		return Object.assign({}, state, {
			editing: action.editing
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
		// } else if (action.type === FETCH_FOREIGN_BASES_REQUEST) {
		// 	return Object.assign({}, state, {
		// 		loading: true,
		// 		error: null
		// 	});
		// } else if ((action.type = FETCH_FOREIGN_BASES_SUCCESS)) {
		// console.log(action);
		// 	return Object.assign({}, state, {
		// 		foreignBases: action.foreignBases,
		// 		loading: false
		// 	});
		// } else if ((action.type = FETCH_FOREIGN_BASES_ERROR)) {
		// 	return Object.assign({}, state, {
		// 		error: action.error,
		// 		loading: false
		// 	});
	} else if (action.type === FETCH_SINGLE_BASE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === FETCH_SINGLE_BASE_SUCCESS) {
		return Object.assign({}, state, {
			currentBase: {
				users: [...action.users]
			},
			loading: false,
			error: null
		});
	} else if (action.type === FETCH_SINGLE_BASE_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	} else if (action.type === ADD_USER_TO_LIST_REQUEST) {
		return Object.assign({}, state, {
			error: action.error,
			loading: true
		});
	} else if (action.type === ADD_USER_TO_LIST_SUCCESS) {
		return Object.assign({}, state, {
			currentBase: { users: [...state.currentBase.users, { ...action.user }] },
			loading: false
		});
	} else if (action.type === ADD_USER_TO_LIST_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	} else if (action.type === DELETE_USER_FROM_BASE_REQUEST) {
		return Object.assign({}, state, {
			error: action.error,
			loading: true
		});
	} else if (action.type === DELETE_USER_FROM_BASE_SUCCESS) {
		const newArray = state.currentBase.users.filter(
			user => user.created !== action.timeStamp
		);
		return Object.assign({}, state, {
			currentBase: {
				users: [...newArray]
			},
			loading: false,
			error: null
		});
	} else if (action.type === DELETE_USER_FROM_BASE_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	}
	// 	} else if (action.type === FETCH_USERS_OF_LIST_REQUEST) {
	// 		return Object.assign({}, state, {
	// 			error: action.error,
	// 			loading: true
	// 		});
	// 	} else if (action.type === FETCH_USERS_OF_LIST_SUCCESS) {
	// 		console.log(action);
	// 		return Object.assign({}, state, {
	// 			userBases: [...action.users],
	// 			loading: false
	// 		});
	// 	} else if (action.type === FETCH_USERS_OF_LIST_ERROR) {
	// 		return Object.assign({}, state, {
	// 			error: action.error,
	// 			loading: false
	// 		});
	// 	} else if (action.type === MODIFY_VALUE_REQUEST) {
	// 		return Object.assign({}, state, {
	// 			error: action.error,
	// 			loading: false
	// 		});
	// 	} else if (action.type === MODIFY_VALUE_SUCCESS) {
	// 		const newState = state.userBases.map(
	// 			baseUser =>
	// 				baseUser.userId === action.baseUser.userId
	// 					? { ...action.baseUser }
	// 					: baseUser
	// 		);
	// 		return Object.assign({}, state, {
	// 			userBases: newState
	// 		});
	// 	} else if (action.type === MODIFY_VALUE_ERROR) {
	// 		return Object.assign({}, state, {
	// 			error: action.error,
	// 			loading: false
	// 		});
	// 	}
	return state;
}

import {
	SET_EDITING,
	FETCH_BASES_BY_CREATOR_ID_REQUEST,
	FETCH_BASES_BY_CREATOR_ID_SUCCESS,
	FETCH_BASES_BY_CREATOR_ID_ERROR,
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
	DELETE_USER_FROM_BASE_ERROR,
	MODIFY_VALUE_REQUEST,
	MODIFY_VALUE_SUCCESS,
	MODIFY_VALUE_ERROR,
	ADD_MESSAGE_TO_LIST_REQUEST,
	ADD_MESSAGE_TO_LIST_SUCCESS,
	ADD_MESSAGE_TO_LIST_ERROR,
	DELETE_MESSAGE_REQUEST,
	DELETE_MESSAGE_SUCCESS,
	DELETE_MESSAGE_ERROR
} from "../actions/interaction";

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
			errorMessage: action.base,
			loading: false,
			error: null
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
	} else if (action.type === FETCH_FOREIGN_BASES_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === FETCH_FOREIGN_BASES_SUCCESS) {
		return Object.assign({}, state, {
			foreignBases: action.foreignBases,
			loading: false,
			error: null
		});
	} else if (action.type === FETCH_FOREIGN_BASES_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	} else if (action.type === FETCH_SINGLE_BASE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === FETCH_SINGLE_BASE_SUCCESS) {
		return Object.assign({}, state, {
			currentBase: {
				...action.data
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
			loading: true,
			error: null
		});
	} else if (action.type === ADD_USER_TO_LIST_SUCCESS) {
		console.log(action.user);
		return Object.assign({}, state, {
			currentBase: {
				...state.currentBase,
				users: [...state.currentBase.users, action.user]
			},
			loading: false,
			error: null
		});
	} else if (action.type === ADD_USER_TO_LIST_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	} else if (action.type === DELETE_USER_FROM_BASE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === DELETE_USER_FROM_BASE_SUCCESS) {
		console.log(action);
		const newUserArr = state.currentBase.users.filter(
			user => user.userId !== action.data.baseuser.userId
		);
		const newForeignBaseArr = state.foreignBases.filter(
			data => data.base.title !== action.data.base.title
		);
		return Object.assign({}, state, {
			currentBase: {
				...state.currentBase,
				users: [...newUserArr]
			},
			foreignBases: newForeignBaseArr,
			loading: false,
			error: null
		});
	} else if (action.type === DELETE_USER_FROM_BASE_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	} else if (action.type === MODIFY_VALUE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === MODIFY_VALUE_SUCCESS) {
		let newArr = state.foreignBases.map(foreignBase => {
			if (action.baseUser.created !== foreignBase.baseuser.created) {
				return foreignBase;
			}
			return {
				base: { ...foreignBase.base },
				baseuser: { ...action.baseUser }
			};
		});
		return Object.assign({}, state, {
			foreignBases: [...newArr],
			loading: false,
			error: null
		});
	} else if (action.type === MODIFY_VALUE_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	} else if (action.type === ADD_MESSAGE_TO_LIST_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === ADD_MESSAGE_TO_LIST_SUCCESS) {
		return Object.assign({}, state, {
			currentBase: {
				...state.currentBase,
				messages: [...state.currentBase.messages, { ...action.message }]
			},
			loading: false,
			error: null
		});
	} else if (action.type === ADD_MESSAGE_TO_LIST_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: null
		});
	} else if (action.type === DELETE_MESSAGE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === DELETE_MESSAGE_SUCCESS) {
		const newArr = state.currentBase.messages.filter(
			message => action.message !== message.id
		);
		return Object.assign({}, state, {
			currentBase: {
				...state.currentBase,
				messages: [...newArr]
			}
		});
	} else if (action.type === DELETE_MESSAGE_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: null
		});
	}
	return state;
}

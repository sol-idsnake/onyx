import { SET_EDITING, ADD_BASE } from "../actions/interaction";

const initialState = {
	editing: false
};

export default function interactionReducer(state = initialState, action) {
	if (action.type === SET_EDITING) {
		return Object.assign({}, state, {
			editing: action.editing
		});
	}
	// else if (action.type === ADD_BASE) {
	// 	return Object.assign({}, state, {

	// 	})
	// }
	return state;
}

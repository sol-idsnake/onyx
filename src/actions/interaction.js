import { API_BASE_URL } from "../config";

export const SET_EDITING = "SET_EDITING";
export const setEditing = editing => ({
	type: SET_EDITING,
	editing,
});

export const postNewBase = (username, title) => dispatch => {
	fetch(`${API_BASE_URL}/base/add`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			title: title,
			username: username,
		}),
	})
		.then(res => {
			return res.json();
		})
		.catch(error => {
			console.log("Request failed", error);
		});
};

import { API_BASE_URL } from "../config";

export function add(userId, title) {
	return fetch(`${API_BASE_URL}/base/add`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			// add auth token
		},
		body: JSON.stringify({
			userId: userId,
			title: title,
		}),
	})
		.then(res => {
			return res.json();
		})
		.catch(error => {
			console.log("Request failed", error);
		});
}


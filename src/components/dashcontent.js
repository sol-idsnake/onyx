import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import AddBase from "./addbase";
import "./dashcontent.css";
import { Link } from "react-router-dom";

export function DashContent() {
	// render() {
	const userbases = [
		{
			title: "test1",
			users: null,
			admins: null,
			messages: null
		},
		{
			title: "test2",
			users: 14,
			admins: 2,
			messages: 7
		}
	];

	const bases = userbases.map(base => (
		<li key={base.title} className="userbase">
			<Link to={base.title}>Whatever title</Link>
			<small>Users in this base: {base.users !== null ? base.users : 0}</small>
			<small>
				Admins in this base: {base.admins !== null ? base.admins : 0}
			</small>
			<small>
				Messages in this base: {base.messages !== null ? base.messages : 0}
			</small>
		</li>
	));

	return (
		<ul>
			{bases}
			<li className="add-list-wrapper">
				<AddBase type="base" />
			</li>
		</ul>
	);
	// }
}

// <input
// 	type="text"
// 	ref={input => (this.input = input)}
// 	onChange={this.onChange}
// />

const mapStateToProps = state => {
	return {
		hasUserbases: state.auth.currentUser.hasUserbases
	};
};

export default requiresLogin()(connect(mapStateToProps)(DashContent));

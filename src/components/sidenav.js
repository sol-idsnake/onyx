import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import "./sidenav.css";

export function Sidenav(props) {
	const upperUsername =
		props.username.charAt(0).toUpperCase() + props.username.slice(1);

	return (
		<div className="sidebar">
			<strong>Welcome back, {upperUsername}.</strong>
			<hr />
			<ul className="sidebar-ul">
				<li className="sidebar-li">Create Userbase</li>
				<li className="sidebar-li">View User lists</li>
			</ul>
		</div>
	);
}

const mapStateToProps = state => {
	const { currentUser } = state.auth;
	return {
		username: state.auth.currentUser.username,
		name: `${currentUser.firstName} ${currentUser.lastName}`,
		protectedData: state.protectedData.data
	};
};

export default requiresLogin()(connect(mapStateToProps)(Sidenav));

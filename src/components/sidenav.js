import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import "./sidenav.css";

export function Sidenav(props) {
	const upperUsername = props.username;

	return (
		<div className="sidebar">
			<strong>Welcome back, {upperUsername}.</strong>
			<hr />
		</div>
	);
}

const mapStateToProps = state => {
	const { currentUser } = state.auth;
	return {
		username: state.auth.currentUser.username,
		name: `${currentUser.firstName} ${currentUser.lastName}`
	};
};

export default requiresLogin()(connect(mapStateToProps)(Sidenav));

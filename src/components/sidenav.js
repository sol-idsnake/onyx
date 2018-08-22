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
			<i className="fas fa-plus-square fa-2x" />
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

import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";

import LoginForm from "./loginForm";

export function LoginPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div className="login-wrapper">
			<div className="header">
				<span>Not a member yet?</span>
				<Link to="/register" className="register-link">
					Register here
				</Link>
			</div>
			<div>
				<p>Username: tester1 OR tester2</p>
				<p>Password: testtesttest (same for both)</p>
			</div>
			<LoginForm />
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);

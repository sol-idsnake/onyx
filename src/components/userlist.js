import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { addUserToList, deleteUserFromBase } from "../actions/interaction";
import Loader from "../img/doubleRing.svg";
import { reduxForm, Field, focus } from "redux-form";
import { nonEmpty, length, isTrimmed } from "../validators";

import "./userlist.css";

export class UserChat extends React.Component {
	onSubmit(values) {
		const baseId = this.props.baseId;
		const access_token = this.props.auth;
		const userName = values.user;
		this.props.dispatch(addUserToList(baseId, userName, access_token));
	}

	deleteUser(event) {
		const userName = event.target.parentNode.innerText.trim();
		this.props.dispatch(
			deleteUserFromBase(this.props.baseId, userName, this.props.auth)
		);
	}

	// focus on input after submission
	render() {
		const users = this.props.loading ? (
			<img src={Loader} alt="Loading..." />
		) : (
			this.props.currentBase.users &&
			this.props.currentBase.users.map(user => {
				return (
					<li key={user.created} className="user-list-entry">
						<span>{user.userId}</span>
						<i
							className="fas fa-times"
							onClick={event => this.deleteUser(event)}
						/>
					</li>
				);
			})
		);

		return (
			<aside className="userlist">
				<p>Users</p>
				<ul className="userlist-ul">{users}</ul>
				<form
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
					className="userForm"
				>
					<label htmlFor="user" />
					<Field
						name="user"
						type="text"
						component="input"
						placeholder="Add a user"
						// validate={[nonEmpty, isTrimmed]}
					/>
					<input
						type="submit"
						value="Submit"
						disabled={this.props.pristine || this.props.submitting}
					/>
				</form>
			</aside>
		);
	}
}

const mapStateToProps = state => ({
	users: state.interaction.currentBase.users,
	auth: state.auth.authToken,
	currentBase: state.interaction.currentBase,
	loading: state.interaction.loading,
	currentAuthUser: state.auth.currentUser.username
});

UserChat = requiresLogin()(connect(mapStateToProps)(UserChat));

export default reduxForm({
	form: "userlist", // a unique name for this form
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus("userlist", Object.keys(errors)[0]))
})(UserChat);

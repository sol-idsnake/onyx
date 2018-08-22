import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { addUserToList, fetchUsersOfList } from "../actions/interaction";

import "./userlist.css";

export class UserChat extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchUsersOfList());
	}

	componentDidUpdate(prevProps) {
		if (this.props.currentUserBase.length === 0) {
			if (this.props.currentBase !== prevProps.currentBase) {
				const userName = this.props.currentAuthUser;
				const baseId = this.props.currentBase.id;
				const acceptedMembership = true;
				const isCreator = true;
				this.props.dispatch(
					addUserToList(baseId, userName, acceptedMembership, isCreator)
				);
			}
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		const userId = this.userName.value;
		const baseId = this.props.currentBase.id;
		this.props.dispatch(addUserToList(baseId, userId));
	}

	render() {
		// --- Add these for input accessibility
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input = React.createRef();
		// ---

		const users = this.props.currentUserBase.map(user => (
			<li key={user.userId}>{user.userId}</li>
		));

		return (
			<div className="listChat">
				<aside className="userlist">
					<p>UserList</p>
					<ul className="userlist-ul">{users}</ul>
					<form onSubmit={this.handleSubmit} className="userForm">
						<input
							type="text"
							placeholder="Add a user"
							ref={input => (this.userName = input)}
							name="userForm"
						/>
						<input type="submit" value="Submit" />
					</form>
				</aside>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentBase: state.interaction.currentBase,
	loading: state.interaction.loading,
	currentUserBase: state.interaction.currentUserBase,
	currentAuthUser: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(UserChat));

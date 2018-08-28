import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { addUserToList, deleteUserFromBase } from "../actions/interaction";

import "./userlist.css";

export class UserChat extends React.Component {
	componentDidMount() {
		// this.props.dispatch(fetchUsersOfList(this.props.baseId));
	}

	// componentDidUpdate(prevProps) {
	// 	if (
	// 		this.props.userBases !== prevProps.userBases &&
	// 		this.props.userBases.length === 0
	// 	) {
	// 		const baseId = this.props.baseId;
	// 		const userName = this.props.currentAuthUser;
	// 		const acceptedMembership = true;
	// 		const isCreator = true;
	// 		// this.props.dispatch(
	// 		// addUserToList(baseId, userName, acceptedMembership, isCreator)
	// 		// );
	// 	}
	// }

	handleSubmit(event) {
		event.preventDefault();
		const userId = this.userName.value;
		const baseId = this.props.baseId;
		this.props.dispatch(addUserToList(baseId, userId));
	}

	deleteUser(event) {
		const timeStamp = event.target.id;
		this.props.dispatch(deleteUserFromBase(timeStamp));
	}

	render() {
		// --- Add these for input accessibility
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input = React.createRef();
		// ---

		let users;
		if (
			this.props.currentBase.users &&
			this.props.currentBase.users.length === 0
		) {
			const myId = this.props.currentAuthUser;
			this.props.dispatch(addUserToList(this.props.baseId, myId));
		} else if (this.props.currentBase.users) {
			users = this.props.currentBase.users.map(user => (
				<li
					key={user.created}
					className="user-list-entry"
					ref={li => (this.userLi = li)}
				>
					<p>{user.userId}</p>
					<i
						className="fas fa-times"
						id={user.created}
						onClick={event => this.deleteUser(event)}
					/>
				</li>
			));
		}

		return (
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
		);
	}
}

const mapStateToProps = state => ({
	currentBase: state.interaction.currentBase,
	// loading: state.interaction.loading,
	// userBases: state.interaction.userBases
	currentAuthUser: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(UserChat));

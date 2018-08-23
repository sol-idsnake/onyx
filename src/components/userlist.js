import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { addUserToList, fetchUsersOfList } from "../actions/interaction";

import "./userlist.css";

export class UserChat extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchUsersOfList());
	}

	// componentDidUpdate(prevProps) {
	// 	if (this.props.currentBase !== prevProps.currentBase) {
	// 		if (this.props.userBases.length === 0) {
	// 			const userName = this.props.currentAuthUser;
	// 			const baseId = this.props.currentBase.id;
	// 			const acceptedMembership = true;
	// 			const isCreator = true;
	// 			this.props.dispatch(
	// 				addUserToList(baseId, userName, acceptedMembership, isCreator)
	// 			);
	// 		}
	// 	}
	// }

	handleSubmit(event) {
		event.preventDefault();
		const userId = this.userName.value;
		const baseId = this.props.currentBase.id;
		this.props.dispatch(addUserToList(baseId, userId));
	}

	render() {
		if (this.props.userBases && this.props.userBases.length === 0) {
			const userName = this.props.currentAuthUser;
			const baseId = this.props.currentBase.id;
			const acceptedMembership = true;
			const isCreator = true;
			// this.props.dispatch(
			// 	addUserToList(baseId, userName, acceptedMembership, isCreator)
			// );
		}

		// --- Add these for input accessibility
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input = React.createRef();
		// ---

		const users = this.props.userBases.map(user => (
			<li key={user.userId} className="user-list-entry">
				<p>{user.userId}</p>
				<i className="fas fa-times" />
			</li>
		));

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
	loading: state.interaction.loading,
	userBases: state.interaction.userBases,
	currentAuthUser: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(UserChat));

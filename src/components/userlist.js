import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { addUserToList, deleteUserFromBase } from "../actions/interaction";
import Loader from "../img/doubleRing.svg";

import "./userlist.css";

export class UserChat extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
		const userId = this.userName.value;
		const baseId = this.props.baseId;
		this.props.dispatch(addUserToList(baseId, userId));
	}

	deleteUser(event) {
		const userName = event.target.parentNode.innerText;
		console.log(this.props.baseId);
		this.props.dispatch(deleteUserFromBase(this.props.baseId, userName));
	}

	render() {
		// --- Add these for input accessibility
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input = React.createRef();
		// ---

		const users = this.props.loading ? (
			<img src={Loader} />
		) : (
			this.props.users &&
			this.props.users.map(user => {
				return (
					<li key={user} className="user-list-entry">
						{user}
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
	users: state.interaction.currentBase.users,
	loading: state.interaction.loading,
	// userBases: state.interaction.userBases
	currentAuthUser: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(UserChat));

import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { addUserToList, deleteUserFromBase } from "../actions/interaction";
import Loader from "../img/doubleRing.svg";

import "./userlist.css";

export class UserChat extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
		const userId = this.userName.value.trim();
		const baseId = this.props.baseId;
		this.props.dispatch(addUserToList(baseId, userId));
		this.userName.value = " ";
	}

	deleteUser(event) {
		const userName = event.target.parentNode.innerText.trim();
		this.props.dispatch(deleteUserFromBase(this.props.baseId, userName));
	}

	render() {
		// --- Add these for input accessibility
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input = React.createRef();
		// ---

		console.log(this.props.currentBase.users);

		// let form;
		// if (
		// 	this.props.currentBase.users.length != 0 &&
		// 	!this.props.currentBase.users[0].isCreator
		// ) {
		// }

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
					onSubmit={this.userName === "" ? "no" : this.handleSubmit}
					className="userForm"
				>
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
	currentAuthUser: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(UserChat));

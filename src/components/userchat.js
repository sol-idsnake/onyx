import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { addUserToList, addMessageToList } from "../actions/interaction";

import "./userchat.css";

export class UserChat extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
		const baseId = this.props.currentBase.id;

		if (event.target.className === "userForm") {
			const userName = this.userName.value;
			this.props.dispatch(addUserToList(baseId, userName));
		} else {
			const message = this.message.value;
			this.props.dispatch(addMessageToList(baseId, message));
		}
	}

	render() {
		// --- Add these for input accessibility
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input = React.createRef();
		// ---

		let users;
		let messages;

		// this.props.currentBase needs to be fetched fully to display data,
		// hence the check for it AND the array it contains
		if (
			this.props.currentBase &&
			this.props.currentBase.userList.length === 0
		) {
			users = <li>Add some users</li>;
		} else if (
			this.props.currentBase &&
			this.props.currentBase.userList.length !== 0
		) {
			users = this.props.currentBase.userList.map((user, index) => {
				return <li key={user + index}>{user}</li>;
			});
		}

		if (
			this.props.currentBase &&
			this.props.currentBase.messages.length === 0
		) {
			messages = <li>Start a conversation</li>;
		} else if (
			this.props.currentBase &&
			this.props.currentBase.messages !== 0
		) {
			messages = this.props.currentBase.messages.map((message, index) => {
				return <li key={message + index}>{message}</li>;
			});
		}

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
				<aside className="chat">
					<p>Chat</p>
					<ul className="messagelist-ul">{messages}</ul>
					<form onSubmit={this.handleSubmit} className="messageForm">
						<input
							type="text"
							placeholder="Add a message"
							ref={input => (this.message = input)}
							name="messageForm"
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
	loading: state.interaction.loading
});

export default requiresLogin()(connect(mapStateToProps)(UserChat));

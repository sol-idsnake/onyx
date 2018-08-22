import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { addUserToList, fetchUsersOfList } from "../actions/interaction";

import "./userlist.css";

export class UserChat extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchUsersOfList());
	}

	handleSubmit(event) {
		event.preventDefault();
		const userId = this.userName.value;
		const baseId = this.props.currentBase.id;
		this.props.dispatch(addUserToList(baseId, userId));
	}

	render() {
		// this.props.currentBase && console.log(this.props.currentBase.id);
		// --- Add these for input accessibility
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input = React.createRef();
		// ---

		let users;
		// for (let user of this.props)
		this.props.currentUserBase && console.log(this.props.currentUserBase);
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
	currentUserBase: state.interaction.currentUserBase
});

export default requiresLogin()(connect(mapStateToProps)(UserChat));

// <aside className="chat">
// <p>Chat</p>
// <ul className="messagelist-ul">{messages}</ul>
// <form onSubmit={this.handleSubmit} className="messageForm">
// 	<input
// 		type="text"
// 		placeholder="Add a message"
// 			ref={input => (this.message = input)}
// 			name="messageForm"
// 		/>
// 		<input type="submit" value="Submit" />
// 	</form>
// </aside>;

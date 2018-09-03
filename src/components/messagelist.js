import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { addMessageToList, deleteMessage } from "../actions/interaction";
import Loader from "../img/doubleRing.svg";
import "./messagelist.css";

export class MessageList extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
		const baseId = this.props.baseId;
		const content = this.message.value;
		const access_token = this.props.auth;
		this.props.dispatch(addMessageToList(baseId, content, access_token));
		this.message.value = " ";
	}

	deleteMessage(event) {
		event.preventDefault();
		const access_token = this.props.auth;
		this.props.dispatch(deleteMessage(event.target.id, access_token));
	}

	render() {
		// --- Add these for input accessibility
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input = React.createRef();
		// ---

		const messages = this.props.loading ? (
			<img src={Loader} alt="Loading..." />
		) : (
			this.props.messages &&
			this.props.messages.map(message => {
				return (
					<li key={message.id} className="message-list-entry">
						<span className="content">{message.content}</span>
						<span className="date">{message.created.slice(0, 10)}</span>
						<i
							id={message.id}
							className="fas fa-times"
							onClick={event => this.deleteMessage(event)}
						/>
						<hr />
					</li>
				);
			})
		);

		return (
			<aside className="messagelist">
				<p>Messages</p>
				<ul className="messagelist-ul">{messages}</ul>
				<form onSubmit={this.handleSubmit} className="userForm">
					<input
						type="text"
						placeholder="Write a message"
						ref={input => (this.message = input)}
						name="userForm"
					/>
					<input type="submit" value="Submit" />
				</form>
			</aside>
		);
	}
}

const mapStateToProps = state => ({
	messages: state.interaction.currentBase.messages,
	loading: state.interaction.loading,
	auth: state.auth.authToken
	// userBases: state.interaction.userBases
	// currentAuthUser: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(MessageList));

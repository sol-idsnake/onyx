import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { addMessageToList } from "../actions/interaction";
import Loader from "../img/doubleRing.svg";
import "./messagelist.css";

export class MessageList extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
		const baseId = this.props.baseId;
		const content = this.message.value;
		this.props.dispatch(addMessageToList(baseId, content));
		this.message.value = " ";
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
					<li key={message.created} className="message-list-entry">
						<span>{message.content}</span>
						<i
							className="fas fa-times"
							onClick={event => this.deleteUser(event)}
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
	loading: state.interaction.loading
	// userBases: state.interaction.userBases
	// currentAuthUser: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(MessageList));

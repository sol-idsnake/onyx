import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { addMessageToList, deleteMessage } from "../actions/interaction";
import Loader from "../img/doubleRing.svg";
import { reduxForm, Field, focus } from "redux-form";
import { nonEmpty, length, isTrimmed } from "../validators";
import Input from "./input";
import "./messagelist.css";

const messageLength = length({ min: 10, max: 160 });

export class MessageList extends React.Component {
	onSubmit(values) {
		const baseId = this.props.baseId;
		const content = values.message;
		const access_token = this.props.auth;
		this.props.dispatch(addMessageToList(baseId, content, access_token));
	}

	deleteMessage(event) {
		event.preventDefault();
		const access_token = this.props.auth;
		this.props.dispatch(deleteMessage(event.target.id, access_token));
	}

	// focus on input after submission
	render() {
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
				<form
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
					className="userForm"
				>
					<label htmlFor="message" />
					<Field
						component={Input}
						type="text"
						name="message"
						placeholder="Add a message"
						validate={[nonEmpty, isTrimmed, messageLength]}
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
	messages: state.interaction.currentBase.messages,
	loading: state.interaction.loading,
	auth: state.auth.authToken
});

MessageList = requiresLogin()(connect(mapStateToProps)(MessageList));

export default reduxForm({
	form: "messagelist", // a unique name for this form
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus("messagelist", Object.keys(errors)[0]))
})(MessageList);

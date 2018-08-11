import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { setEditing, postNewBase } from "../actions/interaction";

import "./addbase.css";

export class AddBase extends React.Component {
	onSubmit(event) {
		event.preventDefault();
		const title = this.textInput.value.trim();
		const username = this.props.username;
		this.props.dispatch(postNewBase(username, title));

		this.textInput.value = "";
	}

	render() {
		if (!this.props.editing) {
			const text = `Add a ${this.props.type}`;
			return (
				<div className="add-button" onClick={() => this.props.dispatch(setEditing(true))}>
					<a href="#">
						{text}
						...
					</a>
				</div>
			);
		}
		const label = `Enter a ${this.props.type}`;
		console.log(this.props);
		return (
			<form className="card add-form" onSubmit={e => this.onSubmit(e)}>
				<input type="text" ref={input => (this.textInput = input)} aria-label={label} />
				<button>Add</button>
				<button type="button" onClick={() => this.props.dispatch(setEditing(false))}>
					Cancel
				</button>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		editing: state.interaction.editing,
		username: state.auth.currentUser.username,
	};
};

export default requiresLogin()(connect(mapStateToProps)(AddBase));

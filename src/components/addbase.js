import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { setEditing } from "../actions/interaction";

import "./addbase.css";

export class AddBase extends React.Component {
	onSubmit(event) {
		event.preventDefault();
		const title = this.textInput.value.trim();
		this.props.onAdd(title);
		this.textInput.value = "";
	}

	render() {
		if (!this.props.editing) {
			const text = `Add a ${this.props.type}`;
			return (
				<div
					className="add-button"
					onClick={() => this.props.dispatch(setEditing(true))}
				>
					<a href="#">
						{text}
						...
					</a>
				</div>
			);
		}
		const label = `Enter a ${this.props.type}`;
		return (
			<form className="add-form" onSubmit={e => this.onSubmit(e)}>
				<input
					type="text"
					ref={input => (this.textInput = input)}
					aria-label={label}
				/>
				<button>Add</button>
				<button
					type="button"
					onClick={() => this.props.dispatch(setEditing(false))}
				>
					Cancel
				</button>
			</form>
		);
	}
}

const mapStateToProps = state => ({
	editing: state.interaction.editing
});

export default requiresLogin()(connect(mapStateToProps)(AddBase));

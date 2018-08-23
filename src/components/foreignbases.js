import React from "react";
import "./foreignbases.css";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { modifier } from "../actions/interaction";

export class ForeignBases extends React.Component {
	onClick(bool) {
		const target = "acceptedMembership";

		this.props.dispatch(modifier(bool, target, this.props.email));
	}

	render() {
		let toAccept;

		// for (let base of this.props.userBases) {
		// 	if (this.props.userBases && this.props.email === base.userId) {
		// 		if (base.acceptedMembership === false) {
		// 			toAccept = (
		// 				<li className="acceptanceLi">
		// 					<p>You have been invited to join this base.</p>
		// 					<input
		// 						type="button"
		// 						value="Accept"
		// 						onClick={() => this.onClick(true)}
		// 					/>
		// 				</li>
		// 			);
		// 		}
		// 	}
		// }

		return (
			<div className="foreignBases">
				<p>Bases I am part of:</p>
				<ul>{toAccept}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	email: state.auth.currentUser.email,
	userBases: state.interaction.userBases
});

export default requiresLogin()(connect(mapStateToProps)(ForeignBases));

import React from "react";
import "./foreignbases.css";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import {
	modifier,
	fetchUsersOfList,
	fetchForeignBases
} from "../actions/interaction";
import { Link } from "react-router-dom";

export class ForeignBases extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchForeignBases(this.props.currentUser.username));
	}

	onClick(bool) {
		const target = "acceptedMembership";
		// this.props.dispatch(modifier(bool, target, this.props.email));
	}

	render() {
		let acceptedBaseList = [];
		let toBeAcceptedBaseList = [];

		// if (this.props.foreignBases) {
		// 	for (let base of this.props.foreignBases) {
		// 		if (base.acceptedMembership) {
		// 			// acceptedBaseList.push(base);
		// 			console.log(base);
		// 		} else {
		// 			toBeAcceptedBaseList.push(base);
		// 		}
		// 	}
		// }
		// console.log(acceptedBaseList, toBeAcceptedBaseList);

		// = this.props.foreignBases.map(base => (
		// 	<li key={base.id} className="base">
		// 		<Link to={`/user-message/${base.id}`}>{base.title}</Link>
		// 		<p>
		// 			Current Users:
		// 			<Link to={`/user-message/${base.id}`} />
		// 		</p>
		// 		<p>
		// 			Current Messages:
		// 			<Link to={`/user-message/${base.id}`} />
		// 		</p>
		// 		<i className="fas fa-times" onClick={() => this.deleteBase(base.id)} />
		// 	</li>
		// ));

		// console.log(baseList);

		// let foreignBases = [];
		// let acceptanceBases = [];
		// for (let key of this.props.userBases) {
		// 	if (key.userId === this.props.email && key.acceptedMembership === true) {
		// 		foreignBases.push(key);
		// 	} else if (
		// 		key.userId === this.props.email &&
		// 		key.acceptedMembership === false
		// 	) {
		// 		acceptanceBases.push(key);
		// 	}
		// }
		// let foreignbases = foreignBases.map(base => (
		// 	<li key={base.created} className="foreignLi">
		// 		<Link to={`/user-message/${base.baseId}`}>{base.baseId}</Link>
		// 		<i className="fas fa-times" onClick={() => this.deleteBase(base.id)} />
		// 	</li>
		// ));

		// let acceptancebases = acceptanceBases.map(base => (
		// 	<li key={base.created} className="acceptanceLi">
		// 		<p>You have been invited to join this base: </p>
		// 		<input
		// 			type="button"
		// 			value="Accept"
		// 			onClick={() => this.onClick(true)}
		// 		/>
		// 	</li>
		// ));

		// {acceptancebases}
		// {foreignbases}
		return <div className="foreignBases" />;
	}
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser,
	// bases: state.interaction.bases,
	foreignBases: state.interaction.foreignBases
});

export default requiresLogin()(connect(mapStateToProps)(ForeignBases));

// 		let toAccept;
// 		let baseObjects = [];
// 		for (let base of this.props.userBases) {
// 			if (this.props.userBases && this.props.email === base.userId) {
// 				if (base.acceptedMembership === false) {
// 					toAccept = (
// 						<li key={base.id} className="acceptanceLi">
// 							<p>You have been invited to join this base.</p>
// 							<input
// 								type="button"
// 								value="Accept"
// 								onClick={() => this.onClick(true)}
// 							/>
// 						</li>
// 					);
// 				} else if (base.acceptedMembership === true) {
// 					this.fetchForeign(base.baseId);
// 					baseObjects.push(base);
// 				}
// 			}
// 		}
// 		let baseLi = baseObjects.map(base => (
// 			<li key={base.created} className="foreignLi">
// 				<Link to={`/user-message/${base.id}`}>{base.title}</Link>
// 				<p>
// 					Current Users:
// 					<Link to={`/user-message/${base.id}`} />
// 				</p>
// 				<p>
// 					Current Messages:
// 					<Link to={`/user-message/${base.id}`} />
// 				</p>
// 				<i className="fas fa-times" onClick={() => this.deleteBase(base.id)} />
// 			</li>
// 		));

// 				<p>Bases I am part of:</p>
// 				<ul>
// 					{toAccept}
// 					{baseLi}
// 				</ul>

// 	componentDidMount() {
// 		// this.props.dispatch(fetchUsersOfList());
// 	}
// 	fetchForeign(id) {
// 		this.props.dispatch(fetchForeignBases(id));
// 		console.log("hi");
// 	}
//

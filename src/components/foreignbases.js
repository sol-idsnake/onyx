import React from "react";
import "./foreignbases.css";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import {
	modifier,
	fetchForeignBases,
	deleteUserFromBase
} from "../actions/interaction";
import { Link } from "react-router-dom";
import Loader from "../img/doubleRing.svg";

export class ForeignBases extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchForeignBases(this.props.currentUser.username));
	}

	acceptMembership(bool, baseId) {
		const username = this.props.currentUser.username;
		this.props.dispatch(modifier(bool, baseId, username));
	}

	removeMeFromBase(event) {
		const baseId = event.target.id;
		const username = this.props.currentUser.username;
		this.props.dispatch(deleteUserFromBase(baseId, username));
	}

	render() {
		let propsBases = this.props.foreignBases;
		let toBeAcceptedBase;
		let acceptedBase;

		for (let i = 0; i < propsBases.length; i++) {
			toBeAcceptedBase = this.props.foreignBases.filter(item => {
				return (
					item.baseuser.isCreator === false &&
					item.baseuser.acceptedMembership === false &&
					item.base.title !== propsBases[i].title
				);
			});
		}
		for (let i = 0; i < propsBases.length; i++) {
			acceptedBase = this.props.foreignBases.filter(item => {
				return (
					item.baseuser.isCreator === false &&
					item.baseuser.acceptedMembership === true &&
					item.base.title !== propsBases[i].title
				);
			});
		}

		const toBeAcceptedBaseList = this.props.loading ? (
			<img src={Loader} alt="Loading..." />
		) : (
			toBeAcceptedBase &&
			toBeAcceptedBase.map(item => {
				return (
					<li key={item.baseuser.created} className="toBeAcceptedBase">
						<p>
							You have been invited to join base:
							<span className="baseName">{item.base.title}</span>. Click
							<span
								className="accept"
								onClick={() =>
									this.acceptMembership(true, item.baseuser.baseId)
								}
							>
								HERE
							</span>
							to accept.
						</p>
					</li>
				);
			})
		);
		// console.log(this.props);
		const acceptedBaseList = this.props.loading ? (
			<img src={Loader} alt="Loading..." />
		) : (
			acceptedBase &&
			acceptedBase.map(item => {
				// console.log(item);
				return (
					<li key={item.base.id} className="base">
						<Link
							to={{
								pathname: `/single-base/${item.base.id}`,
								search: `isCreator=${item.baseuser.isCreator}`
							}}
						>
							{item.base.title}
						</Link>
						<p>Current Users: /></p>
						<p>Current Messages:</p>
						<span
							id={item.base.id}
							className="optOut"
							onClick={event => this.removeMeFromBase(event)}
						>
							Opt out
						</span>
					</li>
				);
			})
		);

		return (
			<div className="foreignBases">
				<ul className="toBeAcceptedBases">{toBeAcceptedBaseList}</ul>
				<ul className="acceptedBasesList">{acceptedBaseList}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser,
	bases: state.interaction.bases,
	foreignBases: state.interaction.foreignBases,
	loading: state.interaction.loading
});

export default requiresLogin()(connect(mapStateToProps)(ForeignBases));

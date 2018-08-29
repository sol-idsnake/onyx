import React from "react";
import "./foreignbases.css";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import {
	modifier,
	fetchUsersOfList,
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
		this.props.dispatch(modifier(bool, baseId));
	}

	removeMeFromBase(timeStamp) {
		this.props.dispatch(deleteUserFromBase(timeStamp));
	}

	render() {
		let propsBases = this.props.bases;
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
			<img src={Loader} />
		) : (
			toBeAcceptedBase &&
			toBeAcceptedBase.map(item => {
				return (
					<li key={item.baseuser.baseId} className="toBeAcceptedBase">
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

		const acceptedBaseList = this.props.loading ? (
			<img src={Loader} />
		) : (
			acceptedBase &&
			acceptedBase.map(item => {
				console.log();
				return (
					<li key={item.base.id} className="base">
						<Link to={`/user-message/${item.base.id}`}>{item.base.title}</Link>
						<p>
							Current Users: <Link to={`/user-message/${item.base.id}`} />
						</p>
						<p>
							Current Messages: <Link to={`/user-message/${item.base.id}`} />
						</p>
						<span
							className="optOut"
							onClick={() => this.removeMeFromBase(item.baseuser.created)}
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

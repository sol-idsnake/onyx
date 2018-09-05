import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import AddBase from "./addbase";
import "./mybases.css";
import { Link } from "react-router-dom";
import {
	fetchBasesByCreatorId,
	addBaseToDb,
	removeBase
} from "../actions/interaction";
import Loader from "../img/doubleRing.svg";

export class DashContent extends React.Component {
	componentDidMount() {
		const creatorId = this.props.user.userId;
		const access_token = this.props.auth;
		this.props.dispatch(fetchBasesByCreatorId(creatorId, access_token));
	}

	addBase(title) {
		const access_token = this.props.auth;
		this.props.dispatch(
			addBaseToDb(
				this.props.user.userId,
				title.trim(),
				this.props.user.username,
				access_token
			)
		);
	}

	deleteBase(id) {
		// add to also remove all BaseUsers upon delete
		const access_token = this.props.auth;
		this.props.dispatch(removeBase(id, access_token));
	}

	render() {
		let baseList;
		if (this.props.loading) {
			baseList = <img src={Loader} alt="Loading..." />;
		} else {
			baseList = this.props.bases.map(item => (
				<li key={item.id} className="base">
					<Link to={`/single-base/${item.id}`}>{item.title}</Link>
					<p>Current Users: {item.users.length}</p>
					<p>Current Messages: {item.messages.length}</p>
					<i
						className="fas fa-times"
						onClick={() => this.deleteBase(item.id)}
					/>
				</li>
			));
		}

		return (
			<div className="myBases">
				<div className="base add-list-wrapper">
					<AddBase type="base" onAdd={title => this.addBase(title)} />
				</div>
				{baseList}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	bases: state.interaction.bases,
	auth: state.auth.authToken,
	user: state.auth.currentUser,
	loading: state.interaction.loading
});

export default requiresLogin()(connect(mapStateToProps)(DashContent));

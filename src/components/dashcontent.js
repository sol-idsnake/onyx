import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import AddBase from "./addbase";
import ForeignBases from "./foreignbases";
import "./dashcontent.css";
import { Link } from "react-router-dom";
import {
	fetchBasesByCreatorId,
	addBaseToDb,
	removeBase
} from "../actions/interaction";
import Loader from "../img/doubleRing.svg";

export class DashContent extends React.Component {
	componentDidMount() {
		const creatorId = this.props.userId;
		this.props.dispatch(fetchBasesByCreatorId(creatorId));
	}

	addBase(title) {
		this.props.dispatch(addBaseToDb(this.props.userId, title));
	}

	deleteBase(id) {
		// add to also remove all BaseUsers upon delete
		this.props.dispatch(removeBase(id));
	}

	render() {
		let baseList;
		if (this.props.loading) {
			baseList = <img src={Loader} />;
		} else {
			baseList = this.props.bases.map(base => (
				<li key={base.id} className="base">
					<Link to={`/single-base/${base.id}`}>{base.title}</Link>
					<p>
						Current Users:
						<Link to={`/single-base/${base.id}`} />
					</p>
					<p>
						Current Messages:
						<Link to={`/single-base/${base.id}`} />
					</p>
					<i
						className="fas fa-times"
						onClick={() => this.deleteBase(base.id)}
					/>
				</li>
			));
		}

		return (
			<ul className="baseWrapper">
				<p>My Bases:</p>
				<li className="base add-list-wrapper">
					<AddBase type="base" onAdd={title => this.addBase(title)} />
				</li>

				{baseList}
				<p>Bases I was added to:</p>
				<ForeignBases />
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	bases: state.interaction.bases,
	userId: state.auth.currentUser.userId,
	loading: state.interaction.loading
});

export default requiresLogin()(connect(mapStateToProps)(DashContent));

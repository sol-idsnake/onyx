import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import { Link } from "react-router-dom";
import "./navbar.css";
import LogoImg from "../img/logo.png";

export class Navbar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let links;
    let logOutButton;

    if (!this.props.loggedIn && this.props.sidebarNotAuth) {
      links = this.props.sidebarNotAuth.map(link => (
        <li key={link.value}>
          <Link to={link.path}>{link.title}</Link>
        </li>
      ));
    } else if (this.props.sidebarAuth) {
      logOutButton = (
        <button className="logout" onClick={() => this.logOut()}>
          Log out
        </button>
      );
      links = this.props.sidebarAuth.map(link => (
        <li key={link.value}>
          <Link to={link.path}>{link.title}</Link>
        </li>
      ));
    }

    return (
      <header>
        <Link to="/">
          <img src={LogoImg} alt="Onyx Logo" className="logoWithoutText" />
        </Link>
        <ul className="navlinks">
          {links} {logOutButton}
        </ul>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  sidebarAuth: state.initialReducer.sidebarAuth,
  sidebarNotAuth: state.initialReducer.sidebarNotAuth,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);

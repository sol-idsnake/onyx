import React from "react";
import LogoWithText from "../img/logowithtext.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./landingpage.css";

export function LandingPage(props) {
  let landingTextLogged = (
    <div>
      <h2>You're logged in.</h2>
      <p>
        Proceed to <Link to="/dashboard">dashboard</Link>
      </p>
    </div>
  );
  let landingText = (
    <div>
      <h2>Member management systems</h2>
      <p>Manage a group of people efficiently and quickly with Onyx.</p>
      <p>Already have an account? Log in or signup</p>
      <div className="controls">
        <div className="button">
          <Link to="/login">Login</Link>
        </div>
        <div className="button">
          <Link to="/register">Signup</Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="landingPage">
      <div className="logo">
        <img src={LogoWithText} alt="Onyx Logo" className="logoWithText" />
      </div>
      <div className="landingText">
        {props.loggedIn ? landingTextLogged : landingText}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(LandingPage);

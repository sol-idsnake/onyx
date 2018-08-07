import React from 'react';
import LogoWithText from '../img/logowithtext.png';
import {Link} from 'react-router-dom'
import './landingpage.css'

export default function LandingPage() {
	return (
		<div className="landingPage">
			<div className="logo">
				<img src={LogoWithText} alt="Onyx Logo" className="logoWithText"/>
			</div>
			<div className="landingText">
				<h2>Member management systems</h2>
				<p>Manage a group of people efficiently and quickly with Onyx.</p>
				<p>Already have an account? Log in or signup</p>
				<div className="controls">
					<div className="button"><Link to="/login">Login</Link></div>
					<div className="button"><Link to="/register">Signup</Link></div>
				</div>
			</div>
		</div>
	)
}
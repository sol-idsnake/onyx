import React from 'react'
import LogoWithText from '../img/logowithtext.png'

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
					<button>Login</button>
					<button>Signup</button>
				</div>
			</div>
		</div>
	)
}
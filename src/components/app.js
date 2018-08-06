import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './navbar'
import LandingPage from './landingpage'
import Member from './member'

export default function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<main>
					<Switch>
						<Route path="/" component={LandingPage} />
						<Route exact path="/users" component={Member} />
					</Switch>
				</main>
			</div>
		</Router>
	)
}
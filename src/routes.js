import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './screens/home/homescreen';

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' component={Home}/>
				</Switch>
			</Router>
		);
	}
}

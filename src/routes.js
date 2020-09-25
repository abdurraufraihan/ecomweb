import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppPath from './lib/path';
import HomeScreen from './screens/home/homescreen';
import './style.css';

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path={AppPath.HOME} exact component={HomeScreen} />
					<Route path={AppPath.CATEGORY} exact component={HomeScreen} />
				</Switch>
			</Router>
		);
	}
}

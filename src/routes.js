import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeScreen from './screens/home/homescreen';

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' exact component={HomeScreen} />
					<Route path='/c/:categoryId' exact component={HomeScreen} />
				</Switch>
			</Router>
		);
	}
}

import React, {Component} from 'react';
import Header from '../../components/header/headerview';
import SideBar from '../../components/sidebar/sidebarview';
import Body from '../../components/body/bodyview';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<SideBar />
				<Body />
			</React.Fragment>
		);
	}
}
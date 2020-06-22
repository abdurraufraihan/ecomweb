import React, {Component} from 'react';
import Header from '../../components/header/headerview';
import SideBar from '../../components/sidebar/sidebarview';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<SideBar />
			</React.Fragment>
		);
	}
}
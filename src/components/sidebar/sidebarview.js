import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './sidebarstyle.css';

export default class SideBar extends Component {
	getSidebarStyle = () => {
		return !this.props.isShowSidebar ? {left: '-200px'} : {};
	}

	render() {
		return (
			<div id='sideBarContainer' style={this.getSidebarStyle()}>
				<div id='sideBarBody'>
					<ul>
						<Link><li>------------All------------</li></Link>
						<Link><li>Category Link</li></Link>
						<Link><li>Category Link</li></Link>
						<Link><li>Category Link</li></Link>
						<Link><li>Category Link</li></Link>
						<Link><li>Category Link</li></Link>
						<Link><li>Category Link</li></Link>
						<Link><li>Category Link</li></Link>
						<Link><li>Category Link</li></Link>
					</ul>
				</div>
			</div>
		);
	}
}
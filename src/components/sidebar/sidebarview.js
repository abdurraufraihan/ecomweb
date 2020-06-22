import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './sidebarstyle.css';

export default class SideBar extends Component {
	render() {
		return (
			<div id='sideBarContainer'>
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
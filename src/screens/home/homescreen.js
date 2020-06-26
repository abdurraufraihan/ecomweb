import React, {Component} from 'react';
import Header from '../../components/header/headerview';
import SideBar from '../../components/sidebar/sidebarview';
import Body from '../../components/body/bodyview';
import ShoppingCart from '../../components/shoppingcart/shoppingcartview';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowSidebar: true
		}
	}

	toggleSidebar = () => {
		this.setState({isShowSidebar: !this.state.isShowSidebar});
	}

	render() {
		return (
			<React.Fragment>
				<Header toggleSidebar={this.toggleSidebar} />
				<SideBar isShowSidebar={this.state.isShowSidebar} />
				<Body />
				<ShoppingCart />
			</React.Fragment>
		);
	}
}
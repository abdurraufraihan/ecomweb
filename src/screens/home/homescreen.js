import React, {Component} from 'react';
import Header from '../../components/header/headerview';
import SideBar from '../../components/sidebar/sidebarview';
import Body from '../../components/body/bodyview';
import ShoppingCart from '../../components/shoppingcart/shoppingcartview';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowSidebar: true,
			isShowShoppingCart: false
		}
	}

	toggleSidebar = () => {
		this.setState({isShowSidebar: !this.state.isShowSidebar});
	}

	toggleShoppingCart = () => {
		this.setState({isShowShoppingCart: !this.state.isShowShoppingCart});
	}

	render() {
		return (
			<React.Fragment>
				<Header
					toggleSidebar={this.toggleSidebar}
					toggleShoppingCart={this.toggleShoppingCart}
				/>
				<SideBar isShowSidebar={this.state.isShowSidebar} />
				<Body />
				<ShoppingCart isShowShoppingCart={this.state.isShowShoppingCart} />
			</React.Fragment>
		);
	}
}
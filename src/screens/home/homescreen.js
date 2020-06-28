import React, {Component} from 'react';
import './homescreenstyle.css';
import Header from '../../components/header/headerview';
import SideBar from '../../components/sidebar/sidebarview';
import Body from '../../components/body/bodyview';
import ShoppingCart from '../../components/shoppingcart/shoppingcartview';
import ApiConnector from '../../api/apiconnector';
import ApiEndpoints from '../../api/apiendpoints';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowSidebar: true,
			isShowShoppingCart: false,
			products: {}
		}
	}

	toggleSidebar = () => {
		this.setState({isShowSidebar: !this.state.isShowSidebar});
	}

	toggleShoppingCart = () => {
		this.setState({isShowShoppingCart: !this.state.isShowShoppingCart});
	}

	productSuccessHandler = (products) => {
		this.setState({products: products});
	}

	erorHandler = (error) => {console.error(error)} //TODO:show error right below of header

	componentDidMount() {
		ApiConnector.sendRequest(
			ApiEndpoints.PRODUCT_URL,
			this.productSuccessHandler,
			this.erorHandler
		);
	}

	render() {
		return (
			<React.Fragment>
				<Header
					toggleSidebar={this.toggleSidebar}
					toggleShoppingCart={this.toggleShoppingCart}
				/>
				<div id='bodyContainer'>
					<SideBar isShowSidebar={this.state.isShowSidebar} />
					<Body
						products={this.state.products.products}
						isShowSidebar={this.state.isShowSidebar}
						isShowShoppingCart={this.state.isShowShoppingCart}
					/>
					<ShoppingCart isShowShoppingCart={this.state.isShowShoppingCart} />
				</div>
			</React.Fragment>
		);
	}
}
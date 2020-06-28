import React, {Component} from 'react';
import './homescreenstyle.css';
import Header from '../../components/header/headerview';
import SideBar from '../../components/sidebar/sidebarview';
import Body from '../../components/body/bodyview';
import ShoppingCart from '../../components/shoppingcart/shoppingcartview';
import ApiConnector from '../../api/apiconnector';
import ApiEndpoints from '../../api/apiendpoints';
import QueryParam from '../../api/apiqueryparams';

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

	getCategoryId = (props) => {
		return props.match ? props.match.params.categoryId : null;
	}

	getProductEndpoint = (searchKeyword) => {
		let categoryId = this.getCategoryId(this.props);
		let endPoint = ApiEndpoints.PRODUCT_URL;
		if (searchKeyword) {
			return endPoint + '?'+ QueryParam.SEARCH + '=' + searchKeyword;
		}
		if (categoryId) {
			return endPoint + '?'+ QueryParam.CATEGORY_ID + '=' + categoryId;
		}
		return endPoint;
	}

	fetchProducts = (searchKeyword=null) => {
		ApiConnector.sendRequest(
			this.getProductEndpoint(searchKeyword),
			this.productSuccessHandler,
			this.erorHandler
		);
	}

	componentDidUpdate(prevProps) {
		let catId = this.getCategoryId(this.props);
		let prevCatId = this.getCategoryId(prevProps);
		if (catId !== prevCatId) {
			this.fetchProducts();
		}
	}

	componentDidMount() {
		this.fetchProducts();
	}

	productSearchHandler = (searchKeyword) => {
		this.fetchProducts(searchKeyword);
	}

	render() {
		return (
			<React.Fragment>
				<Header
					toggleSidebar={this.toggleSidebar}
					toggleShoppingCart={this.toggleShoppingCart}
					productSearchHandler={this.productSearchHandler}
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
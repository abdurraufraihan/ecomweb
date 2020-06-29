import React, {Component} from 'react';
import './shoppingcartstyle.css';
import CartProduct from './cartproduct/cartproductview';

export default class ShoppingCart extends Component {
	getCartStyle = () => {
		return this.props.isShowShoppingCart ? {right: '0px'} : {};
	}

	renderEmptyCart = () => {
		return(
			<div id='emptyCart'>
				<i
					id='shoppingBagIcon'
					className='fa fa-shopping-basket'
				></i>
				<p id='emptyCartText'>Empty Cart</p>
			</div>
		);
	}

	render() {
		return (
			<div id='cartContainer' style={this.getCartStyle()}>
				<div id='cart'>
					<CartProduct />
					<CartProduct />
				</div>
				<div id='orderButtonContainer'>
					<div id='orderButton'>
						<div id='placeOrder'>Place Order</div>
					<div id='orderPrice'>$75</div>
					</div>
				</div>
			</div>
		);
	}
}
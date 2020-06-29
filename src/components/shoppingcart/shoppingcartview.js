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

	generateCart = () => {
		let cart = this.props.cart;
		let cartItems = [];
		for (let index in cart) {
			cartItems.push(
				<div key={index}>
					<CartProduct
						product={cart[index].product}
						quantity={cart[index].quantity}
						productRemoveHandler={this.props.productRemoveHandler}
						setProductQuantityToCart={this.props.setProductQuantityToCart}
					/>
				</div>
			);
		}
		if (cartItems.length > 0) {
			return cartItems;
		}
		return this.renderEmptyCart();
	}

	getTotalOrderPrice = () => {
		let price = 0;
		let cart = this.props.cart;
		for (let index in cart) {
			price += cart[index].product.price * cart[index].quantity;
		}
		return price;
	}

	render() {
		return (
			<div id='cartContainer' style={this.getCartStyle()}>
				<div id='cart'>
					{this.generateCart()}
				</div>
				<div id='orderButtonContainer'>
					<div id='orderButton'>
						<div id='placeOrder'>Place Order</div>
					<div id='orderPrice'>${this.getTotalOrderPrice()}</div>
					</div>
				</div>
			</div>
		);
	}
}
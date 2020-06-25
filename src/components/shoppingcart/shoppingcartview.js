import React, {Component} from 'react';
import './shoppingcartstyle.css';

export default class ShoppingCart extends Component {
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
			<div id='cartContainer'>
				<div id='cart'>
					{this.renderEmptyCart()}
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
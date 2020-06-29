import React, {Component} from 'react';
import './cartproductstyle.css';

export default class CartProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		};
	}

	quantityChangeHandler = (event) => {
		let quantity = parseInt(event.target.value);
		if (quantity > 0) {
			this.setState({quantity: quantity});
			this.props.setProductQuantityToCart(this.props.product.id, quantity);
		}
	}

	render() {
		return(
			<div id='cartProductContainer'>
				<div id='cartImgContainer'>
					<img id='cartImg' src={this.props.product.image} alt='cart product'/>
				</div>
				<div id='cartProductTitleAndPrice'>
					<p id='cartProductTitle'>{this.props.product.title}</p>
					<p id='cartProductPrice'>${this.props.product.price}</p>
				</div>
				<div id="quantityContainer">
					<input
						id='cartProductQuantity'
						type='number'
						value={this.state.quantity}
						onChange={this.quantityChangeHandler}
					/>
				</div>
				<div id="removeCartProduct">
					<span
						id='removeCartProductIcon'
						onClick={
							() => this.props.productRemoveHandler(this.props.product.id)
						}
					>
						<i className="fa fa-times"></i>
					</span>
				</div>
			</div>
		);
	}
}
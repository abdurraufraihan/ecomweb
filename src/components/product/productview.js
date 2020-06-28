import React, {Component} from 'react';
import './productstyle.css';

export default class Product extends Component {
	render() {
		return (
			<div id='productContainer'>
				<div id='productImageContainer'>
					<img id='productImage' src={this.props.product.image} alt='Product'/>
				</div>
				<div id='productTitle'>
					<p>{this.props.product.title}</p>
				</div>
				<div id='productPrice'>
					<p>${this.props.product.price}</p>
				</div>
				<div>
					<button
						id='addToCartButton'
					>
						Add To Cart
					</button>
				</div>
			</div>
		);
	}
}
import React, {Component} from 'react';
import './productstyle.css';
import ImageLib from '../../lib/imagelib';

export default class Product extends Component {
	render() {
		return (
			<div id='productContainer'>
				<div id='productImageContainer'>
					<img id='productImage' src={ImageLib.product} alt='Product'/>
				</div>
				<div id='productTitle'>
					<p>This is product title</p>
				</div>
				<div id='productPrice'>
					<p>$45</p>
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
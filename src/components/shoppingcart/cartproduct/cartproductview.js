import React, {Component} from 'react';
import './cartproductstyle.css';
import ImageLib from '../../../lib/imagelib';

export default class CartProduct extends Component {
	render() {
		return(
			<div id='cartProductContainer'>
				<div id='cartImgContainer'>
					<img id='cartImg' src={ImageLib.product} alt='Cart product'/>
				</div>
				<div id='cartProductTitleAndPrice'>
					<p id='cartProductTitle'>This is cart product title</p>
					<p id='cartProductPrice'>$50</p>
				</div>
				<div id="quantityContainer">
					<input
						id='cartProductQuantity'
						type='number'
					/>
				</div>
				<div id="removeCartProduct">
					<span
						id='removeCartProductIcon'
					>
						<i className="fa fa-times"></i>
					</span>
				</div>
			</div>
		);
	}
}
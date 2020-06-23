import React, {Component} from 'react';
import './bodystyle.css'
import Product from '../product/productview';

export default class Body extends Component {
	render() {
		return (
			<div className='bodyContainer'>
				<div id='body'>
					<Product />
					<Product />
					<Product />
				</div>
			</div>
		);
	}
}
import React, {Component} from 'react';
import './bodystyle.css'
import Product from '../product/productview';

export default class Body extends Component {
	getBodyStyle = () => {
		return this.props.isShowSidebar ? {marginLeft: '230px'} : {};
	}

	getBodyStyleClass = () => {
		return this.props.isShowShoppingCart ?
			'bodyContainer bodyContainerWithCart' : 'bodyContainer';
	}

	render() {
		return (
			<div className={this.getBodyStyleClass()} style={this.getBodyStyle()}>
				<div id='body'>
				{this.props.products &&
						this.props.products.map((product) => (
							<Product
								key={product.id}
								product={product}
								addToCartHandler={this.props.addToCartHandler}
							/>
						))
					}
				</div>
			</div>
		);
	}
}
import React, {Component} from 'react';
import './productskeletonstyle.css';
import '../skeletonstyle.css';
import Constants from '../../../lib/constants';

export default class ProductSkeleton extends Component {
	generateProductSkeleton = () => {
		let productSkeleton = [];
		for (let i = 0; i < Constants.MAX_PRODUCT_SKELETON; i++) {
			productSkeleton.push(
				<div id='productSkeletonWrapper' key={i}>
					<div className='skeleton productSkeleton productSkeletonImage'></div>
					<div className='skeleton productSkeleton productSkeletonTitle'></div>
					<div className='skeleton productSkeleton productSkeletonAddToCart'>
					</div>
				</div>
			);
		}
		return productSkeleton;
	}

	render() {
		return (
			<div id='productSkeletonContainer'>
				{this.generateProductSkeleton()}
			</div>
		);
	}
}
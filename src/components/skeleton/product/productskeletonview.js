import React, {Component} from 'react';
import './productskeletonstyle.css';
import '../skeletonstyle.css';

export default class ProductSkeleton extends Component {
	generateProductSkeleton = () => {
		let productSkeleton = [];
		for (let i = 0; i < 8; i++) {
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
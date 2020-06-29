import React, {Component} from 'react';
import './categoryskeletonstyle.css';
import '../skeletonstyle.css';
import Constants from '../../../lib/constants';

export default class CategorySkeleton extends Component {
	gnerateCategorySkeleton = () => {
		let categorySkeletons = [];
		for (let i = 0; i < Constants.MAX_CATEGORY_SKELETON; i++) {
			categorySkeletons.push(
				<div key={i} className='skeleton categorySkeleton'></div>
			);
		}
		return categorySkeletons;
	}

	render() {
		return (
			<div>{this.gnerateCategorySkeleton()}</div>
		);
	}
}

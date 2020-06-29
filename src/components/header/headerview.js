import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './headerstyle.css';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		};
	}

	searchButtonSubmitHandler = (event) => {
		event.preventDefault();
		let searchKeyword = this.state.search.trim();
		this.props.productSearchHandler(searchKeyword);
	}

	searchChangeHandler = (event) => {
		this.setState({search: event.target.value});
	}

	renderSearch = () => {
		return (
			<div id='search'>
				<form onSubmit={this.searchButtonSubmitHandler}>
					<input
						id='searchInput'
						type='text'
						placeholder='Search'
						onChange={this.searchChangeHandler}
						value={this.state.search}
					/>
					<button type='submit' id='searchButton'>
						search
					</button>
				</form>
			</div>
		);
	}

	render() {
		return (
			<div id='headerContainer'>
				<div id='logoContainer'>
					<div id='burgerIconContainer' onClick={this.props.toggleSidebar}>
						<div className='burgerSlice'></div>
						<div className='burgerSlice'></div>
						<div className='burgerSlice'></div>
					</div>
					<div id='logo'><Link to='/'>Raihan Store</Link></div>
				</div>
				{this.renderSearch()}
				<div id='cartIconContainer'>
					<i
						onClick={this.props.toggleShoppingCart}
						id='cartIcon'
						className='fa fa-shopping-basket'
					></i>
					<span id='cartCounter'>{this.props.totalCartItem}</span>
				</div>
				<div id='signIn'>SIGN IN</div>
			</div>
		);
	}
}
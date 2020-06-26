import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './headerstyle.css';

export default class Header extends Component {
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
				<div id='search'>
					<form>
						<input
							id='searchInput'
							type='text'
							placeholder='Search'
						/>
						<button type='submit' id='searchButton'>search</button>
					</form>
				</div>
				<div id='cartIconContainer'>
					<i
						onClick={this.props.toggleShoppingCart}
						id='cartIcon'
						className='fa fa-shopping-basket'
					></i>
					<span id='cartCounter'>5</span>
				</div>
				<div id='signIn'>SIGN IN</div>
			</div>
		);
	}
}
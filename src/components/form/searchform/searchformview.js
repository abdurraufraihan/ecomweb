import React, {Component} from 'react';
import './searchformstyle.css';

export default class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		};
	}

	searchFormSubmitHandler = (event) => {
		event.preventDefault();
		let searchKeyword = this.state.search.trim();
		this.props.productSearchHandler(searchKeyword);
	}

	searchChangeHandler = (event) => {
		this.setState({search: event.target.value});
	}

	render() {
		return (
			<form onSubmit={this.searchFormSubmitHandler} id='searchForm'>
				<input
					id='searchInput'
					type='text'
					placeholder='Search...'
					onChange={this.searchChangeHandler}
					value={this.state.search}
				/>
				<button type='submit' id='searchButton'>
					search
				</button>
			</form>
		);
	}
}
import React, { Component } from 'react';
import './ScrollText.css';

export class ScrollText extends Component {
	constructor() {
		super();
		this.state = {
			film: {},
			error: ''
		};
	}

	componentDidMount() {
		let range = 7;
		let num = Math.floor(Math.random() * Math.floor(range)) + 1;
		let url = `https://swapi.co/api/films/${num}`;
		fetch(url).then(response => response.json()).then(data => this.setState({ film: data })).catch(error =>
			this.setState({
				error: error.message
			})
		);
	}
	render() {
		const { film } = this.state;
		return (
			<section className="scrollText">
				<div className="crawl">
					<p>{film.opening_crawl}</p>
					<div className="filmInfo">
						<p>{film.title}</p>
						<p>{film.release_date}</p>
					</div>
				</div>
			</section>
		);
	}
}

export default ScrollText;

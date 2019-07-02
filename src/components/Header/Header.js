import './Header.css';
import Container from '../Container/Container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

export class Header extends Component {
	constructor() {
		super();
		this.state = {
			people: [],
			planet: [],
			vehicle: [],
			favorites: [],
			error: ''
		};
	}

		componentDidMount() {
			let url = 'https://swapi.co/'
		
			fetch(`${url}api/people/`)
			.then(response => response.json())
			.then(data => data.results)
			.then(people => this.setState({people}))
			.catch(error => this.setState({error}))
		
			fetch(`${url}api/planets/`)
			.then(response => response.json())
			.then(data => data.results)
			.then(planet => this.setState({planet}))
			.catch(error => this.setState({error}))
		
			fetch(`${url}api/vehicles/`)
			.then(response => response.json())
			.then(data => data.results)
			.then(vehicle => this.setState({vehicle}))
			.catch(error => this.setState({error}))
		  }


	render() {
		const People = () => (
			<div>
				<Container data={this.state.people} /> {' '}
			</div>
		);

		const Planets = () => (
			<div>
				<Container data={this.state.planet} /> {' '}
			</div>
		);

		const Vehicles = () => (
			<div>
				<Container data={this.state.vehicle} /> {' '}
			</div>
		);
	}
		return (
			<div>
				<header className="lightside-header">
					<h1> Light Side </h1>{' '}
					<button className="btns favorited">
						Favorited: <span> 0 </span>{' '}
					</button>{' '}
				</header>{' '}
				<Router>
					<div className="change-btn">
						<Link to="/People">
							<button className="btns people-btn"> People </button>{' '}
						</Link>{' '}
						<Link to="/Planets">
							<button className="btns planets-btn"> Planets </button>{' '}
						</Link>{' '}
						<Link to="/Vehicles">
							<button className="btns vehicles-btn"> Vehicles </button>{' '}
						</Link>{' '}
					</div>{' '}
					<Route path="/People" component={People} />
					<Route path="/Planets" component={Planets} />
					<Route path="/Vehicles" component={Vehicles} />{' '}
				</Router>{' '}
			</div>
		);
	}
}

export default Header;

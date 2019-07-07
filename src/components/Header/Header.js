import './Header.css';
import Container from '../Container/Container';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../Home/Home.js';
import PeopleData from '../Card/PeopleData.js'
import PlanetsData from '../Card/PlanetsData.js'
import VehiclesData from '../Card/VehiclesData.js'

export class Header extends Component {
	constructor() {
		super();
		this.state = {
			people: [] || PeopleData,
			planets: [] || PlanetsData,
			vehicles: [] || VehiclesData,
			favorites: [],
			error: ''
		};
	}

	componentDidMount() {
		this.getPeople();
		this.getPlanets();
		this.getVehicles();
	}

	getPeople = () => {
		let url = 'https://swapi.co/';

		fetch(`${url}api/people/`)
			.then(response => response.json())
			.then(data => data.results)
			.then(people =>
				this.setState({
					people
				})
			)
			.catch(error =>
				this.setState({
					error
				})
			);
	};

	getPlanets = () => {
		let url = 'https://swapi.co/';

		fetch(`${url}api/planets/`)
			.then(response => response.json())
			.then(data => data.results)
			.then(planets =>
				this.setState({
					planets
				})
			)
			.catch(error =>
				this.setState({
					error
				})
			);
	};

	getVehicles = () => {
		let url = 'https://swapi.co/';

		fetch(`${url}api/vehicles/`)
			.then(response => response.json())
			.then(data => data.results)
			.then(vehicles =>
				this.setState({
					vehicles
				})
			)
			.catch(error =>
				this.setState({
					error
				})
			);
	};

	render() {
		const People = () => (
			<div>
				<Container favorites={this.state.favorites} data={this.state.people} /> {' '}
			</div>
		);
		{console.log('people', People)}

		const Planets = () => (
			<div>
				<Container favorites={this.state.favorites} data={this.state.planets} /> {' '}
			</div>
		);

		const Vehicles = () => (
			<div>
				<Container favorites={this.state.favorites} data={this.state.vehicles} /> {' '}
			</div>
		);

		return (
			<div>
				<header className='lightside-header'>
					<h1> Light Side </h1>{' '}
					<button className='btns favorited'>
						Favorited: <span> {this.state.favorites.length} </span> {' '}
					</button>{' '}
					{' '}
				</header>{' '}
				{' '}
				<Router>
					<div className='change-btn'>
						<NavLink to='/' className='nav'>
							<button className="btns home-btn"> Home </button> {' '}
						</NavLink>{' '}
						{' '}
						<NavLink to='/People' className='nav'>
							<button className="btns people-btn"> People </button> {' '}
						</NavLink>{' '}
						{' '}
						<NavLink to='/Planets' className='nav'>
							<button className="btns planets-btn"> Planets </button> {' '}
						</NavLink>{' '}
						{' '}
						<NavLink to='/Vehicles' className='nav'>
							<button className="btns vehicles-btn"> Vehicles </button> {' '}
						</NavLink>{' '}
						{' '}
					</div>{' '}
					<Route exact path='/' component={Home} />
					<Route path='/People' render={() => <Container data={PeopleData.results} />} /> 
					<Route path='/Planets' render={() => <Container data={PlanetsData.results} />} /> {' '}
					<Route path='/Vehicles' render={() => <Container data={VehiclesData.results} />} /> {' '}
				</Router>{' '}
				{/* {!this.state.people.length &&
				!this.states.planets.length &&
				!this.state.vehicles.length && (
					<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c110454-5b33-4416-bf9b-72992c7cb56f/d60eb1v-79212624-e842-4e55-8d58-4ac7514ca8e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjMTEwNDU0LTViMzMtNDQxNi1iZjliLTcyOTkyYzdjYjU2ZlwvZDYwZWIxdi03OTIxMjYyNC1lODQyLTRlNTUtOGQ1OC00YWM3NTE0Y2E4ZTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9LDpLmLlbA507H7fKa8aEDxFr8k3SlwCGC1zuJ13d1w" />
				)} */}
				{People} {Planets} {Vehicles}{' '}
			</div>
		);
	}
}

export default Header;

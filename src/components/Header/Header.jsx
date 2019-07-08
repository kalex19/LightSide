import './Header.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../Home/Home.jsx';
import Container from '../Container/Container';
import Favorites from '../Favorites/Favorites';
import Loading from '../Loading/Loading';

export class Header extends Component {
	constructor() {
		super();
		this.state = {
			people: [],
			planets: [],
			vehicles: [],
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

	favoriteCard = id => {
		const favoritedCard = [ ...this.state.people, ...this.state.planets, ...this.state.vehicles ].find(
			card => card.id === id
		);

		if (favoritedCard) {
			this.setState({
				favorites: [ ...this.state.favorites, favoritedCard ]
			});
		}

		// const toggle = favoritedCard.favorite != favoritedCard.favorite;

		// const addCard = this.state.favorites.filter(favCard => favCard === favoritedCard);
		// if (addCard) {

		// } else {
		// 	const deleteCard = this.state.favorites.filter(favCard => favCard !== favoritedCard);
		// 	this.setState({
		// 		favorites: deleteCard
		// 	});
		// }
		console.log(this.state.favorites);
	};
	//need to toggle favorite on the card
	//route.js file - render routes vs app

	render() {
		const { people, planets, vehicles } = this.state;
		return (
			<div>
				<header className="lightside-header">
					<h1> Light Side </h1>
				</header>
				<Router>
					<div className="change-btn">
						<NavLink to="/">
							<button className="btns home-btn">Home</button>
						</NavLink>
						<NavLink to="/Favorites">
							<button className="btns favorites-btn">
								Favorites: <span> {this.state.favorites.length}</span>
							</button>
						</NavLink>
						<NavLink to="/People">
							<button className="btns people-btn">People</button>
						</NavLink>
						<NavLink to="/Planets">
							<button className="btns planets-btn">Planets</button>
						</NavLink>
						<NavLink to="/Vehicles">
							<button className="btns vehicles-btn">Vehicles</button>
						</NavLink>
					</div>
					<Route exact path="/" component={Home} />
					<Route path="/Favorites" render={() => <Favorites favorites={this.state.favorites} />} />
					<Route
						path="/People"
						render={() => <Container favoriteCard={this.favoriteCard} data={this.state.people} />}
					/>
					<Route
						path="/Planets"
						render={() => <Container favoriteCard={this.favoriteCard} data={this.state.planets} />}
					/>
					<Route
						path="/Vehicles"
						render={() => <Container favoriteCard={this.favoriteCard} data={this.state.vehicles} />}
					/>
				</Router>
				{(!people.length || !planets.length || !vehicles.length) && <Loading />}
			</div>
		);
	}
}

export default Header;

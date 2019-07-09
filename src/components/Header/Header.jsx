import './Header.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../Home/Home.jsx';
import Container from '../Container/Container';
import Favorites from '../Favorites/Favorites';
import Loading from '../Loading/Loading';
import { cleanPlanets, cleanPeople, cleanVehicles } from '../../Cleaner';

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
		const { people, planets, vehicles, favorites } = this.state;
		if (!!people && !!planets && !!vehicles) {
			this.getPeople();
			this.getPlanets();
			this.getVehicles();
		}
		if (!!favorites) this.getFromStorage();
	}

	getPeople = () => {
		let url = 'https://swapi.co/';
		fetch(`${url}api/people/`)
			.then(response => response.json())
			.then(data => cleanPeople(data.results))
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
			.then(data => cleanPlanets(data.results))
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
			.then(data => cleanVehicles(data.results))
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

		favoritedCard.favorite = !favoritedCard.favorite;

		if (favoritedCard.favorite) {
			this.setState({
				favorites: [ ...this.state.favorites, favoritedCard ]
			});
		} else {
			this.setState({
				favorites: this.state.favorites.filter(favorite => favorite.id !== id)
			});
		}
		this.saveToStorage();
	};

	saveToStorage = () => {
		const { people, planets, vehicles, favorites } = this.state;
		let favs = JSON.stringify(favorites);
		localStorage.setItem('favorites', favs);
		let persons = JSON.stringify(people);
		localStorage.setItem('people', persons);
		let globe = JSON.stringify(planets);
		localStorage.setItem('planets', globe);
		let auto = JSON.stringify(vehicles);
		localStorage.setItem('vehicles', auto);
	};

	//refactor saveToStorage

	getFromStorage = () => {
		for (let key in this.state) {
			if (localStorage.hasOwnProperty(key)) {
				let value = localStorage.getItem(key);
				try {
					value = JSON.parse(value);
					this.setState({ [key]: value });
				} catch (e) {
					this.setState({ [key]: value });
				}
			}
		}
	};

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
					<Route
						path="/Favorites"
						render={() => (
							<Favorites
								favorites={this.state.favorites}
								favoriteCard={this.favoriteCard}
								onLoad={this.getFromStorage}
							/>
						)}
					/>
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

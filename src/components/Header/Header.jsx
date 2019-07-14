import './Header.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../Home/Home.jsx';
import Container from '../Container/Container';
import Favorites from '../Favorites/Favorites';
import Loading from '../Loading/Loading';
import { getPeople, getPlanets, getVehicles } from '../apiCalls/apiCalls.js';

export class Header extends Component {
	constructor() {
		super();
		this.state = {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			error: '',
			num: 4
		};
	}

	componentDidMount() {
		const { people, planets, vehicles, favorites } = this.state;
		if (!people.length || !planets.length || !vehicles.length) {
			getPeople();
			getPlanets();
			getVehicles();
		}
		getFromStorage();

		getPeople()
			.then(people => this.setState({ people: people }))
			.catch(this.setState({ error: 'Error fetching data' }));

		getPlanets()
			.then(planets => this.setState({ planets: planets }))
			.catch(this.setState({ error: 'Error fetching data' }));

		getVehicles()
			.then(vehicles => this.setState({ vehicles: vehicles }))
			.catch(this.setState({ error: 'Error fetching data' }));
	}

	favoriteCard = id => {
		const favoritedCard = [ ...this.state.people, ...this.state.planets, ...this.state.vehicles ].find(
			card => card.id === id
		);

		favoritedCard.favorite = !favoritedCard.favorite;

		if (favoritedCard.favorite && !this.state.favorites.includes(favoritedCard)) {
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
		const { favorites } = this.state;
		let favs = JSON.stringify(favorites);
		localStorage.setItem('favorites', favs);
	};

	getFromStorage = () => {
		for (let key in this.state) {
			if (localStorage.hasOwnProperty(key)) {
				let value = localStorage.getItem(key);
				value = JSON.parse(value);
				this.setState({ [key]: value });
			}
		}
	};

	handleClick = e => {
		e.preventDefault();
		if (this.state.num === 4) {
			this.setState({
				num: 15
			});
			e.target.innerText = 'Show Less';
		} else {
			this.setState({
				num: 4
			});
			e.target.innerText = 'Show More';
		}
	};

	render() {
		const { people, planets, vehicles } = this.state;
		return (
			<div>
				<header className="lightside-header">
					<h1>
						Star <i className="fab fa-old-republic icon" /> Wars
					</h1>
				</header>
				<Router>
					<div className="change-btn">
						<NavLink to="/">
							<button className="btns home-btn">Home</button>
						</NavLink>
						<NavLink to="/favorites">
							<button className="btns favorites-btn">
								Favorites: <span> {this.state.favorites.length}</span>
							</button>
						</NavLink>
						<NavLink to="/people">
							<button className="btns people-btn">People</button>
						</NavLink>
						<NavLink to="/planets">
							<button className="btns planets-btn">Planets</button>
						</NavLink>
						<NavLink to="/vehicles">
							<button className="btns vehicles-btn">Vehicles</button>
						</NavLink>
					</div>
					<Route exact path="/" component={Home} />
					<Route
						path="/favorites"
						render={() => (
							<Favorites
								favorites={this.state.favorites}
								favoriteCard={this.favoriteCard}
								onLoad={this.getFromStorage}
							/>
						)}
					/>
					<Route
						path="/people"
						render={() => (
							<Container
								favoriteCard={this.favoriteCard}
								data={this.state.people}
								handleClick={this.handleClick}
								num={this.state.num}
							/>
						)}
					/>
					<Route
						path="/planets"
						render={() => (
							<Container
								favoriteCard={this.favoriteCard}
								data={this.state.planets}
								handleClick={this.handleClick}
								num={this.state.num}
							/>
						)}
					/>
					<Route
						path="/vehicles"
						render={() => (
							<Container
								favoriteCard={this.favoriteCard}
								data={this.state.vehicles}
								handleClick={this.handleClick}
								num={this.state.num}
							/>
						)}
					/>
				</Router>
				{(!people.length || !planets.length || !vehicles.length) && <Loading />}
			</div>
		);
	}
}

export default Header;

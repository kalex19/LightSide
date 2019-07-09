import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../Home/Home.jsx';
import Container from '../Container/Container.jsx';
import Favorites from '../Favorites/Favorites.jsx';
import Loading from '../Loading/Loading.jsx';
import { getPeople, getPlanets, getVehicles } from '../apiCalls/apiCalls.js'
import { cleanPlanets, cleanPeople, cleanVehicles } from '../../Cleaner';

export class App extends Component {
	constructor(props) {
		console.log('props', props)
		super(props);
		this.state = {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			error: ''
		};
	}

	componentDidMount() {
		const { favorites } = this.state;
		if (!!favorites) this.getFromStorage();

		getPeople()
		.then(data => {
			this.setState({ people: cleanPeople(data.results) })
		})
		.catch(this.setState({ error: 'Error fetching data' }))
		
		getPlanets()
		.then(data => {
			this.setState({ planets: cleanPlanets(data.results) })
		})
		.catch(this.setState({ error: 'Error fetching data' }))
		
		getVehicles()
		.then(data => {
			this.setState({ vehicles: cleanVehicles(data.results) })
		})
		.catch(this.setState({ error: 'Error fetching data' }))
	}
	
	

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
								Favorites: <span>{this.state.favorites.length}</span>
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

export default App;

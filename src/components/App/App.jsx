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
		fetch('https://swapi.co/api/people/')
		.then(response => response.json())
		.then(data => {
			this.setState({people: cleanPeople(data.results)})
		})
		
		fetch('https://swapi.co/api/planets/')
		.then(response => response.json())
		.then(data => {
			this.setState({planets: cleanPlanets(data.results)})
		})
		
		fetch('https://swapi.co/api/vehicles/')
		.then(response => response.json())
		.then(data => {
			this.setState({vehicles: cleanVehicles(data.results)})
		})
	}

	async fetchData() {
		const { updatePeople, updatePlanets, updateVehicles } = this.props;
		const { people, planets, vehicles } = this.state;

		try {
			const peopleData = await getPeople(people);
			const planetData = await getPlanets(planets);
			const vehicleData = await getVehicles(vehicles);

			this.setState({
				people: [],
				planets: [],
				vehicles: [],
				favorites: [],
				error: ''
			}, updatePeople(peopleData), 
			updatePlanets(planetData), 
			updateVehicles(vehicleData));
		} catch (error) {
			this.setState({ error: 'Error fetching data' });
		}
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
						render={() => <Favorites favorites={this.state.favorites} favoriteCard={this.favoriteCard} />}
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

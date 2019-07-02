import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Container from '../Container/Container.js';
// import Card from '../Card/Card.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PeopleData from '../Card/PeopleData.js'
import PlanetsData from '../Card/PlanetsData.js'
import VehiclesData from '../Card/VehiclesData.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: PeopleData.results,
      planet: PlanetsData.results,
      vehicle: VehiclesData.results,
      favorites: ''
    }
  }
  render() {
    const People = () => (
      <div>
        <Container data={this.state.people} />
      </div>
    );

    const Planets = () => (
      <div>
        <Container data={this.state.planet} />
      </div>
    );

    const Vehicles = () => (
      <div>
        <Container data={this.state.vehicle} />
      </div>
    )

    return (
      <div className="App">
        <header className="lightside-header">
          <h1>Light Side</h1>
          <Header />
          <Router>
            <Link to='/People'><button className="btns people-btn">People</button></Link>
            <Link to='/Planets'><button className="btns planets-btn">Planets</button></Link>
            <Link to='/Vehicles'><button className="btns vehicles-btn">Vehicles</button></Link>
            <Route path='/People' component={People} />
            <Route path='/Planets' component={Planets} />
            <Route path='/Vehicles' component={Vehicles} />
          </Router>
          
          
        </header>
      </div>
    )
  };
}

export default App;

import React, { Component } from 'react';
import './App.css';
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
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello!</h1>
          {console.log(PeopleData.results)}
          {console.log(PlanetsData.results)}
          {console.log(VehiclesData.results)}
        </header>
      </div>
    )
  };
}

export default App;

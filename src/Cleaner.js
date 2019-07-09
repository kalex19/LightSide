export const cleanPlanets = (planets) => {
  return planets.map(planet => ({
    id: planet.created,
    Name: planet.name,
    Population: planet.population,
    Terrain: planet.terrain,
    Diameter: planet.diameter,
  }))
};

export const cleanPeople = (people) => {
  {console.log(people)}
  return people.map(person => ({
    id: person.created,
    Name: person.name,
    Gender: person.gender,
    'Birth Year': person.birth_year,
    Height: person.height,
    'Eye Color': person.eye_color,
  }))
}

export const cleanVehicles = (vehicles) => {
  return vehicles.map(vehicle => ({
    id: vehicle.created,
    Name: vehicle.name,
    Model: vehicle.model,
    Class: vehicle.vehicle_class,
    Passengers: vehicle.passengers,
  }))
}
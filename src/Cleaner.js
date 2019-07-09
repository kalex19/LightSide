export const cleanPlanets = (planets) => {
  return planets.map(planet => ({
    id: planet.created,
    name: planet.name,
    population: planet.population,
    terrain: planet.terrain,
    diameter: planet.diameter,
  }))
};

export const cleanPeople = (people) => {
  {console.log(people)}
  return people.map(person => ({
    id: person.created,
    name: person.name,
    gender: person.gender,
    'birth year': person.birth_year,
    Height: person.height,
    'eye color': person.eye_color,
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
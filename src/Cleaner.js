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
  return people.map(person => ({
    id: person.created,
    name: person.name,
    gender: person.gender,
    'birth year': person.birth_year,
    height: person.height,
    'eye color': person.eye_color,
  }))
}

export const cleanVehicles = (vehicles) => {
  return vehicles.map(vehicle => ({
    id: vehicle.created,
    name: vehicle.name,
    model: vehicle.model,
    class: vehicle.vehicle_class,
    passengers: vehicle.passengers,
  }))
}
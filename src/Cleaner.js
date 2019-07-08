export const cleanPlanets = (planets) => {
  return planets.map(planet => ({
    id: planet.created,
    name: planet.name,
    population: planet.population,
    terrain: planet.terrain,
    diameter: planet.diameter
  }))
};
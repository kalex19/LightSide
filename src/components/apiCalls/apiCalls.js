import { cleanPlanets, cleanPeople, cleanVehicles } from '../../Cleaner'; 

export const getPeople = () => {
    return fetch('https://swapi.co/api/people/')
        .then(response => response.json())
        .then(data => {
            return cleanPeople(data.results)
        })
};

export const getPlanets = () => {
    return fetch('https://swapi.co/api/planets/')
        .then(response => response.json())
        .then(data => {
            return cleanPlanets(data.results)
        })
};

export const getVehicles = () => {
    return fetch('https://swapi.co/api/vehicles/')
        .then(response => response.json())
        .then(data => {
            return cleanVehicles(data.results)
        })
};
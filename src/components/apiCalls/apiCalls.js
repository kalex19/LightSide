<<<<<<< HEAD
import {
    cleanPlanets,
    cleanPeople,
    cleanVehicles
} from '../../Cleaner';
=======
import { cleanPlanets, cleanPeople, cleanVehicles } from '../../Cleaner'; 
>>>>>>> 3800b15d3806f0c3498d7969a0f24050d784db90

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
        .then(data => fetch(data.residents))
        .then()
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
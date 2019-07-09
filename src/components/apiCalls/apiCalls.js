export const getPeople = () => {
    return fetch('https://swapi.co/api/people/')
        .then(response => {
            if(!response.ok) {
                throw Error('Error fetching people cards')
            } else {
                return response.json();
            }
        })
};

export const getPlanets = () => {
    return fetch('https://swapi.co/api/planets/')
        .then(response => {
            if(!response.ok) {
                throw Error('Error fetching planet cards')
            } else {
                return response.json();
            }
        })
};

export const getVehicles = () => {
    return fetch('https://swapi.co/api/vehicles/')
        .then(response => {
            if(!response.ok) {
                throw Error('Error fetching vehicle cards')
            } else {
                return response.json();
            }
        })
};
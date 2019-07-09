export const getPeople = () => {
    return fetch('https://swapi.co/api/people/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if(!response.ok) {
                throw Error('Error fetching people cards')
            } else {
                return response.json();
            }
        })
};

export const getPlanets = () => {
    return fetch('https://swapi.co/api/planets/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if(!response.ok) {
                throw Error('Error fetching people cards')
            } else {
                return response.json();
            }
        })
};

export const getVehicles = () => {
    return fetch('https://swapi.co/api/vehicles/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if(!response.ok) {
                throw Error('Error fetching people cards')
            } else {
                return response.json();
            }
        })
};
import {
    getPeople
} from './apiCalls.js';

describe('fetched data', () => {
    let mockData;

    beforeEach(() => {
        mockData = [{
                people: {
                    name: 'Klio'
                }
            },
            {
                planets: {
                    name: 'Pluto'
                }
            },
            {
                vehicles: {
                    name: 'BMW'
                }
            }
        ];

        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData)
            })
        })
    });

    it('should be called with the correct params', () => {
        const expected = ['https://swapi.co/api/people/'];

        getPeople(mockData);
        expect(window.fetch).toHaveBeenCalledWith(...expected)
    })

    it('should return a parsed response if status is ok', async () => {
        const result = await getPeople(mockData);
        console.log(mockData)
        expect(result).toEqual(mockData)
    });
})
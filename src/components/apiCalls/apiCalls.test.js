import { getPeople, getPlanets, getVehicles } from './apiCalls.js';
import React from 'react';

describe('fetched data', () => {
    let mockData;

    beforeEach(() => {
        mockData = [
            { people: { name: 'Klio' } },
            { planets: { name: 'Pluto' } },
            { vehicles: { name: 'BMW' } }
        ];

        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData)
            })
        })
    });

    it('should be called with the correct params', () => {
        const expected = [
            'https://swapi.co/api/people/',
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'}
            }
        ];

        getPeople(mockData);
        expect(window.fetch).toHaveBeenCalledWith(...expected)
    })

    it('should return a parsed response if status is ok', async () => {
        const result = await getPeople(mockData);

        expect(result).toEqual(mockData)
    });

    it('should return an error if status is not ok', async () => {
        window.fetch = jest.fn().mockImplementationOnce(() => {
            return Promise.resolve({
                ok: false
            });
        });

        await expect(getPeople()).rejects.toEqual(Error('Error fetching people cards'))
    })
})
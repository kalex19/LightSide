import React from 'react';
import { shallow, mount } from 'enzyme';
import { cleanPlanets, cleanPeople, cleanVehicles } from './Cleaner';

describe('Cleaner', () => {
    describe('cleanPlanets', () => {
        let mockData;
        let mockFunc;

        beforeEach = () => {
            mockFunc = jest.fn();
            mockData = {
                id: 1,
                name: 'Pluto',
                population: 2000,
                terrain: 'rocky',
                diameter: 3000,
                climate: 'temperate',
            }
        }

        it.skip('should be called with the correct params', () => {
            expect(mockFunc).toBeCalledWith(mockData);
        })
    })
})

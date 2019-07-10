import React from 'react';
import { shallow, mount } from 'enzyme';
import Container from './Container.jsx';
import { cleanPlanets, cleanPeople, cleanVehicles } from '../../Cleaner';
import { data } from './Container.jsx';

describe('Container', () => {
    it('should match snapshot', () => {
        const wrapper = mount(<Container />)
        
        expect(wrapper).toMatchSnapshot();
    })

    
})
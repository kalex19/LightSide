import React from 'react';
import { shallow, mount } from 'enzyme';
import Container from './Container.jsx';

describe('Container', () => {
    it('should match snapshot', () => {
        const mockData = [
            {
            }
        ]
        const wrapper = shallow(
            <Container 
                data={mockData}
            />)
        
        expect(wrapper).toMatchSnapshot();
    })

    
})
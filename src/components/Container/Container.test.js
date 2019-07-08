import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Container from './Container.jsx';

describe('Container', () => {
    it('should match snapshot', () => {
        const mockData = [
            {name:"Pam",
            birthyear:"1847",
            terrain:"unknown",
            diameter:"unknown",
            population:"unknown",
            gender:"female",
            height:"unknown",
            eyecolor:"gray",
            model:"unknown",
            class:"unknown",
            passengers:"unknown"
            }
        ]
        const wrapper = shallow(
            <Container 
                data={mockData}
            />)
        
        expect(wrapper).toMatchSnapshot();
    })

    
})
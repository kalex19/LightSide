import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card.js';

describe('Card', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(
            <Card 
                name="Kayla" 
                birthyear="1950" 
                gender="female" 
                height="unknown" 
                eyecolor="blue" 
            />);

        expect(wrapper).toMatchSnapshot();
    })
    it('should match the snapshot with favorite', () => {
        const wrapper = shallow(
        <Card 
            name="Katie" 
            favorites={true} 
            birthyear="1960" 
            gender="female" 
            height="unknown" 
            eyecolor="green" 
        />);

        expect(wrapper).toMatchSnapshot();  
    });

    
})
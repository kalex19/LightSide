import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card.jsx';

describe('Card', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(
            <Card 
                name="Kayla"  
            />);

        expect(wrapper).toMatchSnapshot();
    })
    it('should match the snapshot with favorite', () => {
        const wrapper = shallow(
        <Card 
            name="Katie" 
            favorites={true} 
        />);

        expect(wrapper).toMatchSnapshot();  
    });

    
})
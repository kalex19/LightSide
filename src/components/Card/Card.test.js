import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card.jsx';

describe('Card', () => {
    let wrapper; 
    let mockFunc;

    beforeEach = () => {
        mockFunc = jest.fn()
        wrapper = shallow(
            <Card 
                name='Katie' 
                id='3' 
                favoriteCard={mockFunc} />
            );
    }
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
        
    });

    it('renders the name of a person, planet or vehicle', () => {
        const addName = shallow(<Card name='Kayla' />);
        const name = 'Kayla'

        expect(addName.contains(name)).toEqual(true);
    })

    it('should call favorite card on click', () => {
        const mockCallBack = jest.fn();
        const button = shallow(
            <Card onClick={mockCallBack} />

        )

        button.find('button').simulate('click')
        expect(mockCallBack).toBeCalledWith(3)

    });

    
})
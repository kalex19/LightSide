import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card.jsx';

describe('Card', () => {
    let mockFunc;
    let mockData

    beforeEach (() => {
        mockFunc = jest.fn()
        mockData = {
            name: 'R2D2',
            terrain: 'n/a',
            diameter: '204',
            population: '12999'
        }
    })
    it('should match snapshot', () => {
        const testInfo = {
            class: "starfighter",
            id: "2014-12-10T16:33:52.860000Z",
            model: "Twin Ion Engine/Ln Starfighter",
            name: "TIE/LN starfighter",
            passengers: "0"
        }
        const wrapper = shallow(<Card 
            info={testInfo}
            favoriteCard={jest.fn()}
        />)
        expect(wrapper).toMatchSnapshot()
        
    });

    it('should call favorite card on click', () => {
        const mockCallBack = jest.fn();
        const testInfo = {
            class: "starfighter",
            id: "2014-12-10T16:33:52.860000Z",
            model: "Twin Ion Engine/Ln Starfighter",
            name: "TIE/LN starfighter",
            passengers: "0"
        }
        const wrapper = shallow(<Card 
            info={testInfo}
            favoriteCard={jest.fn()}
        />)

        wrapper.find('button').simulate('click');
        expect(mockCallBack).toBeCalledWith(testInfo.id)

    });

    
})
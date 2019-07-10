import React from 'react';
import { shallow, mount } from 'enzyme';
import Container from './Container.jsx';

describe('Container', () => {
    it('should match snapshot', () => {
        const mockData = [
            {
                class: "wheeled",
                id: "2014-12-10T15:36:25.724000Z",
                model: "Digger Crawler",
                name: "Sand Crawler",
                passengers: "30"
            }
        ];
        const wrapper = shallow(
            <Container 
                data={mockData} 
                favoriteCard={jest.fn()} 
                handleClick={jest.fn()}
                num='4'
            />)
        
        expect(wrapper).toMatchSnapshot();
    })

    it('should show more cards when showMore is clicked', () => {
        const mockCallBack = jest.fn();
        const mockData =[{
                class: "wheeled",
                id: "4",
                model: "Digger Crawler",
                name: "Sand Crawler",
                passengers: "30"
            }];
        const wrapper = shallow(
            <Container 
                data={mockData} 
                favoriteCard={jest.fn()} 
                handleClick={jest.fn()}
                num={4}
            />)

        mockCallBack();
        wrapper.find('.showMoreBtn').simulate('click');
        expect(mockCallBack).toHaveBeenCalled()

    })

    
})
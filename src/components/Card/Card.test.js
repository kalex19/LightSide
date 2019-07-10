import React from 'react';
import {
    shallow
} from 'enzyme';
import Card from './Card.jsx';

describe('Card', () => {
  let mockFunc;
  let mockData;

  beforeEach(() => {
    mockFunc = jest.fn()
    mockData = {
        class: "starfighter",
        id: "2014-12-10T16:33:52.860000Z",
        model: "Twin Ion Engine/Ln Starfighter",
        name: "TIE/LN starfighter",
        passengers: "0"
    }
  })
  it('should match snapshot', () => {
    const wrapper = shallow( < Card info = {
            mockData
        }
        favoriteCard = {
            mockFunc
        }
        />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should call favorite card on click', () => {
    const wrapper = shallow( < Card 
            info = {
                mockData
            }
            favoriteCard = {
                mockFunc
            }
    />)

    mockFunc("2014-12-10T16:33:52.860000Z"); wrapper.find('button').simulate('click'); expect(mockFunc).toBeCalledWith(mockData.id);
    });
})
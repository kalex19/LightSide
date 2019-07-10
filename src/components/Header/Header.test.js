import React from 'react';
import {
    shallow,
    mount
} from 'enzyme';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';

describe('Header', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render( < Header / > , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should be able to save to state', () => {
        const wrapper = mount( < Header / > )
        const mockData = {
            "error": "Error fetching data",
            "favorites": [],
            "num": 4,
            "people": [],
            "planets": [],
            "vehicles": [],
        }
        expect(wrapper.state()).toEqual(mockData);
    })

    it('should be able to save people to state', () => {
        const wrapper = shallow( < Header / > )
        expect(wrapper.state().people).toEqual([]);
    })

    it('should be able to save planets to state', () => {
        const wrapper = shallow( < Header / > )
        expect(wrapper.state().planets).toEqual([]);
    })

    it('should be able to save vehicles to state', () => {
        const wrapper = shallow( < Header / > )
        expect(wrapper.state().vehicles).toEqual([]);
    })

})
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Header from './Header.js';

describe('Header', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<Header />)

        expect(wrapper).toMatchSnapshot();
    })
    
})
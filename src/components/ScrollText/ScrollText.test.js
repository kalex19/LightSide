import React from 'react';
import { shallow, mount } from 'enzyme';
import ScrollText from './ScrollText.jsx';

describe('ScrollText', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<ScrollText />)
        expect(wrapper).toMatchSnapshot();
    })
})
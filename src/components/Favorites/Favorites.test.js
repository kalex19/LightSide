import React from 'react';
import {
  shallow
} from 'enzyme';
import Favorites from './Favorites.jsx';

describe('Favorites', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( < Favorites / > );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
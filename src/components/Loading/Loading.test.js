import React from 'react';
import {
  shallow
} from 'enzyme';
import Loading from './Loading.jsx';

describe('Loading', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( < Loading / > );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
import React from 'react';
import { mount } from 'enzyme';
import Index from '../index';

describe('<NoIndex', () => {
  it('should renders correctly', () => {
    const elem = mount(<Index>test<p>test2</p></Index>);
    expect(elem.find('p').text()).toBe('test2');
    expect(elem).toMatchSnapshot();
  });
});

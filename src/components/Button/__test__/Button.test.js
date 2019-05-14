import React from 'react';
import Button from '../Button';
import { mount } from 'enzyme';

describe('<Button/>', () => {
  it('should render button', () => {
    const button = mount(<Button label='test'/>);
    expect(button.text()).toEqual('test');
    expect(button).toMatchSnapshot();
  });
});

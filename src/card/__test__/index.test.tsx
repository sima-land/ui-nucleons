import React from 'react';
import { mount } from 'enzyme';
import { Card } from '..';

describe('Card', () => {
  it('should renders without props', () => {
    const wrapper = mount(<Card />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with slots', () => {
    const wrapper = mount(
      <Card>
        <Card.Content>[content]</Card.Content>
        <Card.Footer>[footer]</Card.Footer>
        <Card.Header>[header]</Card.Header>
      </Card>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toBe('[header][content][footer]');
  });
});

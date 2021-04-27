import React from 'react';
import { mount } from 'enzyme';
import { Grid } from '..';

describe('Grid', () => {
  it('should renders without props', () => {
    const wrapper = mount(
      <Grid />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders correctly', () => {
    const wrapper = mount(
      <Grid align='center' spacing={32} className='custom-grid-class' style={{ background: '#0f0' }}>
        <Grid.Item xl={2} m={12}>First</Grid.Item>
        <Grid.Item xl={4} m={12}>Second</Grid.Item>
        <Grid.Item xl={6} m={12}>Third</Grid.Item>
      </Grid>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Grid.Item', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <Grid.Item
        mxs={12}
        ms={11}
        mm={10}
        ml={9}
        xs={8}
        s={7}
        m={6}
        l={5}
        xl={4}
        children='Hello, world!'
        className='custom-item-class'
        style={{ background: '#f00' }}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').hasClass('custom-item-class')).toBe(true);
  });
});

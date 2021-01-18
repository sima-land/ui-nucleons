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
        <Grid.Item max={2} md={12}>First</Grid.Item>
        <Grid.Item max={4} md={12}>Second</Grid.Item>
        <Grid.Item max={6} md={12}>Third</Grid.Item>
      </Grid>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Grid.Item', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <Grid.Item
        xxs={8}
        xs={7}
        sm={6}
        md={5}
        lg={4}
        xl={3}
        xxl={2}
        max={1}
        children='Hello, world!'
        className='custom-item-class'
        style={{ background: '#f00' }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

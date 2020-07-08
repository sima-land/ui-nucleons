import React from 'react';
import { mount } from 'enzyme';
import WithTooltip, { Tooltip } from '../index';

describe('WithTooltip', () => {
  it('should renders without props', () => {
    const wrapper = mount(
      <WithTooltip />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "inline" prop', () => {
    const wrapper = mount(
      <WithTooltip shown inline />
    );

    expect(wrapper.find(Tooltip).prop('inline')).toBe(true);
  });

  it('should handle "holderElement" prop', () => {
    const wrapper = mount(
      <WithTooltip holderElement='aside' />
    );

    expect(wrapper.find('aside')).toHaveLength(1);
  });

  it('should handle "holderProps" prop', () => {
    const wrapper = mount(
      <WithTooltip holderElement='aside' holderProps={{ id: 'test-block' }} />
    );

    expect(wrapper.find('aside').prop('id')).toBe('test-block');
  });

  it('should handle "shown" prop', () => {
    const wrapper = mount(
      <WithTooltip shown />
    );

    expect(wrapper.find(Tooltip)).toHaveLength(1);

    wrapper.setProps({ shown: false });
    expect(wrapper.find(Tooltip)).toHaveLength(0);
  });

  it('should handle "tooltipChildren" prop', () => {
    const wrapper = mount(
      <WithTooltip shown tooltipChildren='Hello, world!' />
    );

    expect(wrapper.find(Tooltip).prop('children')).toBe('Hello, world!');
  });

  it('should handle "onDismiss" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <WithTooltip shown onDismiss={spy} />
    );

    expect(wrapper.find(Tooltip).prop('onDismiss')).toBe(spy);
  });
});

describe('Tooltip', () => {
  it('should renders', () => {
    const wrapper = mount(
      <Tooltip
        holderRef={{ current: document.createElement('div') }}
        children='Test tooltip'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "inline" prop', () => {
    const wrapper = mount(
      <Tooltip
        holderRef={{ current: document.createElement('div') }}
        children='Test tooltip'
        inline
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

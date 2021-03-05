import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MaskedField } from '..';
import TextField from '../../text-field';

describe('MaskedField', () => {
  it('should renders properly', () => {
    const wrapper = mount(
      <MaskedField mask='__ __ №______' />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass mask state to onBlur callback', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <MaskedField mask='____' onBlur={spy} />
    );

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find(TextField).find('input').simulate('blur');
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].type).toBe('blur');
    expect(spy.mock.calls[0][1].cleanValue).toBe('');

    wrapper.setProps({ onBlur: undefined });

    act(() => {
      wrapper.find(TextField).find('input').simulate('blur');
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle ref prop', () => {
    const spy = jest.fn();

    mount(
      <MaskedField ref={spy} mask='____' onBlur={spy} />
    );

    expect(spy.mock.calls[0][0].nodeName).toBe('INPUT');
  });

  it('should handle mask prop change', () => {
    const wrapper = mount(
      <MaskedField mask='__-__' value='112233' />
    );

    expect((wrapper.find('input').getDOMNode() as any).value).toBe('11-22');

    wrapper.setProps({
      mask: '__-__-__',
      value: '112233',
    });

    expect((wrapper.find('input').getDOMNode() as any).value).toBe('11-22-33');
  });
});

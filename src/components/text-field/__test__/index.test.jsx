import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import TextField from '../index';
import { BaseInput } from '../base-input';
import { fitElementHeight } from '../../helpers/fit-element-height';

jest.mock('../../helpers/fit-element-height', () => {
  const original = jest.requireActual('../../helpers/fit-element-height');

  return {
    ...original,
    __esModule: true,
    fitElementHeight: jest.fn(original.fitElementHeight),
  };
});

describe('<TextField />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <TextField />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "disabled" prop', () => {
    const wrapper = mount(
      <TextField disabled />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "variant" prop', () => {
    const wrapper = mount(
      <TextField variant='desktop' />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ variant: 'mobile' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle adornment props', () => {
    const wrapper = mount(
      <TextField startAdornment='Name: ' />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ startAdornment: null, endAdornment: 'Kg' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "caption" prop', () => {
    const wrapper = mount(
      <TextField caption={(<span>Hello <b>World</b>!</span>)} />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ disabled: true, failed: true, variant: 'mobile' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "label" prop', () => {
    const wrapper = mount(
      <TextField label='The best label in our world!' />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ disabled: true, failed: true, variant: 'mobile' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle event callback props', () => {
    const callbacks = {
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onFocus: jest.fn(),
    };

    const wrapper = mount(
      <TextField
        label='Test label'
        {...callbacks}
      />
    );

    Object.values(callbacks).forEach(callback => {
      expect(callback).toHaveBeenCalledTimes(0);
    });

    act(() => {
      wrapper.find(BaseInput).simulate('focus');
    });

    expect(callbacks.onBlur).toHaveBeenCalledTimes(0);
    expect(callbacks.onChange).toHaveBeenCalledTimes(0);
    expect(callbacks.onFocus).toHaveBeenCalledTimes(1);

    act(() => {
      wrapper.find(BaseInput).simulate('blur');
    });

    expect(callbacks.onBlur).toHaveBeenCalledTimes(1);
    expect(callbacks.onChange).toHaveBeenCalledTimes(0);
    expect(callbacks.onFocus).toHaveBeenCalledTimes(1);

    act(() => {
      wrapper.find(BaseInput).simulate('change');
    });

    expect(callbacks.onBlur).toHaveBeenCalledTimes(1);
    expect(callbacks.onChange).toHaveBeenCalledTimes(1);
    expect(callbacks.onFocus).toHaveBeenCalledTimes(1);

    act(() => {
      jest.spyOn(wrapper.find(BaseInput).getDOMNode(), 'focus');
    });

    expect(wrapper.find(BaseInput).getDOMNode().focus).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('.input-block').simulate('click');
    });

    expect(wrapper.find(BaseInput).getDOMNode().focus).toHaveBeenCalledTimes(1);
  });
  it('should handle "multiline" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <TextField
        multiline
        onInput={spy}
        baseInputProps={{ rows: 3 }}
      />
    );

    expect(wrapper).toMatchSnapshot();

    fitElementHeight.mockClear();

    expect(spy).toHaveBeenCalledTimes(0);
    expect(fitElementHeight).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('textarea').simulate('input');
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(fitElementHeight).toHaveBeenCalledTimes(1);
  });
});

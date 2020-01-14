import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { PageSelectForm } from '../page-select-form';
import Input from '../../input';
import Link from '../../link';
import Button from '../../button';

describe('<PageSelectForm />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <PageSelectForm />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle "change" input event', () => {
    const wrapper = mount(
      <PageSelectForm
        min={10}
        max={20}
      />
    );

    expect(wrapper.find(Input).prop('value')).toBe('');

    // change
    act(() => {
      wrapper.find(Input).prop('onChange')({ target: { value: 'test' } });
    });

    wrapper.update();
    expect(wrapper.find(Input).prop('value')).toBe('');

    act(() => {
      wrapper.find(Input).prop('onChange')({ target: { value: '12' } });
    });

    wrapper.update();
    expect(wrapper.find(Input).prop('value')).toBe('12');

    act(() => {
      wrapper.find(Input).prop('onChange')({ target: { value: '192' } });
    });

    wrapper.update();
    expect(wrapper.find(Input).prop('value')).toBe('19');
  });
  it('should handle "keyup" input event', () => {
    const wrapper = mount(
      <PageSelectForm
        min={10}
        max={20}
      />
    );

    // keyup
    act(() => {
      wrapper.find(Input).prop('onKeyUp')({ target: { value: '25' } });
    });

    wrapper.update();
    expect(wrapper.find(Input).prop('value')).toBe('20');

    act(() => {
      wrapper.find(Input).prop('onKeyUp')({ target: { value: '7' } });
    });

    wrapper.update();
    expect(wrapper.find(Input).prop('value')).toBe('10');

    act(() => {
      wrapper.find(Input).prop('onKeyUp')({ target: { value: '17' } });
    });

    wrapper.update();
    expect(wrapper.find(Input).prop('value')).toBe('17');

    // clear input value
    act(() => {
      wrapper.find(Input).prop('onKeyUp')({ target: { value: '' } });
    });

    wrapper.update();
    expect(wrapper.find(Input).prop('value')).toBe('');
  });
  it('should handle "onSubmit" prop', () => {
    const spy = jest.fn();
    const otherSpy = jest.fn();

    const wrapper = mount(
      <PageSelectForm
        min={1}
        max={10}
        onSubmit={spy}
        onClose={otherSpy}
      />
    );

    expect(wrapper.find(Link).prop('onClick')).toBe(otherSpy);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Button).prop('onClick')();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual({ value: null });

    act(() => {
      wrapper.find(Input).prop('onChange')({ target: { value: '8' } });
    });
    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(1);
    wrapper.find(Button).prop('onClick')();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[1][0]).toEqual({ value: 8 });

    act(() => {
      wrapper.find(Input).prop('onKeyPress')({ key: 'Enter' });
    });
    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy.mock.calls[2][0]).toEqual({ value: 8 });
  });
});

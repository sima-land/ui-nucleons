import React from 'react';
import { mount } from 'enzyme';
import TouchSlider, { makeGutterUpdater } from '../';

describe('<TouchSlider />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <TouchSlider />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle props', () => {
    const wrapper = mount(
      <TouchSlider layoutProps={{ xsMaxWidth: 'sm', xxsPadding: 'sm' }}>
        <div>Foo</div>
        <div>Baz</div>
      </TouchSlider>
    );
    expect(wrapper).toMatchSnapshot();

    jest.spyOn(window, 'removeEventListener');

    expect(window.removeEventListener).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(window.removeEventListener).toHaveBeenCalled();
  });
});

describe('makeGutterUpdater()', () => {
  it('should return function', () => {
    const tempWindowWidth = window.innerWidth;
    const testWrapperRef = { current: null };
    const testInnerRef = { current: null };

    const result = makeGutterUpdater(testWrapperRef, testInnerRef);

    expect(result).not.toThrow();

    window.innerWidth = 320;

    testWrapperRef.current = {
      parentElement: { getBoundingClientRect: () => ({ width: 288 }) },
      style: {},
    };
    testInnerRef.current = {
      style: {},
    };

    result();

    expect(testWrapperRef.current.style).toStrictEqual({
      margin: '0 -16px',
    });
    expect(testInnerRef.current.style).toStrictEqual({
      padding: '0 16px',
    });

    window.innerWidth = tempWindowWidth;
  });
});

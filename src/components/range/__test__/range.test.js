import React from 'react';
import { mount } from 'enzyme';
import Range, { Range as PureRange } from '../range';
import classes from '../range.scss';

describe('<Range />', () => {
  it('should works without props', () => {
    const wrapper = mount(
      <Range />
    );

    expect(wrapper.find(PureRange)).toHaveLength(1);
  });

  it('should handle "wrapperProps" prop', () => {
    const wrapper = mount(
      <Range
        wrapperProps={{ className: 'test-wrapper', 'data-test': 123 }}
      />
    );

    expect(wrapper.find(`.${classes['range-wrapper-base']}`).prop('className')).toContain('test-wrapper');
    expect(wrapper.find(`.${classes['range-wrapper-base']}`).prop('data-test')).toBe(123);
  });

  it('should handle "containerProps" prop', () => {
    const wrapper = mount(
      <Range
        containerProps={{ className: 'test-container', 'data-test': 234 }}
      />
    );

    expect(wrapper.find(`.${classes['range-container-base']}`).prop('className')).toContain('test-container');
    expect(wrapper.find(`.${classes['range-container-base']}`).prop('data-test')).toBe(234);
  });

  it('should handle "trackProps" prop', () => {
    const wrapper = mount(
      <Range
        trackProps={{ className: 'test-track', 'data-test': 345 }}
      />
    );

    expect(wrapper.find(`.${classes['available-base']}`).prop('className')).toContain('test-track');
    expect(wrapper.find(`.${classes['available-base']}`).prop('data-test')).toBe(345);
  });

  it('should handle "rangeProps" prop', () => {
    const wrapper = mount(
      <Range
        rangeProps={{ className: 'test-range', 'data-test': 456 }}
      />
    );

    expect(wrapper.find(`.${classes['selected-base']}`).prop('className')).toContain('test-range');
    expect(wrapper.find(`.${classes['selected-base']}`).prop('data-test')).toBe(456);
  });

  it('should handle "thumbProps" prop', () => {
    const wrapper = mount(
      <Range
        thumbProps={{ className: 'test-thumb', 'data-test': 'thumb' }}
      />
    );

    expect(wrapper.find(`.${classes['thumb-base']}`).at(0).prop('className')).toContain('test-thumb');
    expect(wrapper.find(`.${classes['thumb-base']}`).at(1).prop('className')).toContain('test-thumb');
    expect(wrapper.find(`.${classes['thumb-base']}`).at(0).prop('data-test')).toBe('thumb');
    expect(wrapper.find(`.${classes['thumb-base']}`).at(1).prop('data-test')).toBe('thumb');
  });

  it('should handle "disabled" prop', () => {
    const wrapper = mount(
      <Range disabled />
    );
    const instance = wrapper.find(PureRange).instance();

    expect(wrapper.find(`.${classes['range-container-base']}`).prop('className')).toContain(classes.disabled);

    jest.spyOn(instance, 'toggleGrabbed');
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(0);
    wrapper.find(`.${classes['range-container-base']}`).getDOMNode().dispatchEvent(new MouseEvent('mousedown'));
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(0);

    wrapper.setProps({ disabled: false });
    wrapper.find(`.${classes['range-container-base']}`).getDOMNode().dispatchEvent(new MouseEvent('mousedown'));
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(1);
  });

  it('should handle "onChange" and "onSlide" props', () => {
    const spy = jest.fn();
    const otherSpy = jest.fn();
    const wrapper = mount(
      <Range
        min={10}
        max={20}
        step={2}
        onChange={spy}
        onSlide={otherSpy}
      />
    );
    const instance = wrapper.find(PureRange).instance();
    expect(spy).toHaveBeenCalledTimes(0);

    // simulate drag start
    wrapper.find(`.${classes['range-container-base']}`).getDOMNode().dispatchEvent(new MouseEvent('mousedown', {
      clientX: 10,
    }));
    expect(spy).toHaveBeenCalledTimes(0);
    expect(otherSpy).toHaveBeenCalledTimes(1);

    // simulate drag move
    jest.spyOn(instance, 'constrainValue').mockImplementation(() => 14);
    window.dispatchEvent(new MouseEvent('mousemove', {
      clientX: 14,
    }));
    expect(spy).toHaveBeenCalledTimes(0);
    expect(otherSpy).toHaveBeenCalledTimes(2);

    // simulate drag end (without start)
    window.dispatchEvent(new MouseEvent('mouseup', {
      clientX: 14,
    }));

    expect(spy).toHaveBeenCalledTimes(1);
    expect(otherSpy).toHaveBeenCalledTimes(2);
  });

  it('should place thumbs and range properly on props change', () => {
    const wrapper = mount(
      <Range
        min={0}
        max={10}
        step={1}
        startValue={2}
        finishValue={4}
      />
    );

    expect(wrapper.find(`.${classes['thumb-base']}`).at(0).prop('style').left).toBe('20%');
    expect(wrapper.find(`.${classes['thumb-base']}`).at(1).prop('style').left).toBe('40%');
    expect(wrapper.find(`.${classes['selected-base']}`).prop('style').left).toBe('20%');
    expect(wrapper.find(`.${classes['selected-base']}`).prop('style').width).toBe('20%');

    // не знаю почему но работает только так
    wrapper.setProps({ finishValue: 6 });
    wrapper.setProps({ finishValue: 6 });
    expect(wrapper.find(`.${classes['thumb-base']}`).at(0).prop('style').left).toBe('20%');
    expect(wrapper.find(`.${classes['thumb-base']}`).at(1).prop('style').left).toBe('60%');
    expect(wrapper.find(`.${classes['selected-base']}`).prop('style').left).toBe('20%');
    expect(wrapper.find(`.${classes['selected-base']}`).prop('style').width).toBe('40%');

    wrapper.setProps({ startValue: undefined, finishValue: undefined });
    wrapper.setProps({ startValue: undefined, finishValue: undefined });
    expect(wrapper.find(`.${classes['thumb-base']}`).at(0).prop('style').left).toBe('20%');
    expect(wrapper.find(`.${classes['thumb-base']}`).at(1).prop('style').left).toBe('60%');
    expect(wrapper.find(`.${classes['selected-base']}`).prop('style').left).toBe('20%');
    expect(wrapper.find(`.${classes['selected-base']}`).prop('style').width).toBe('40%');
  });

  it('should unsubscribe event listeners on unmount', () => {
    const spy = jest.fn();
    const otherSpy = jest.fn(() => spy);
    const wrapper = mount(
      <PureRange addGlobalListener={otherSpy} />
    );

    expect(spy).toHaveBeenCalledTimes(0);
    expect(otherSpy).toHaveBeenCalledTimes(5);
    wrapper.instance().componentWillUnmount();
    expect(spy).toHaveBeenCalledTimes(5);
    expect(otherSpy).toHaveBeenCalledTimes(5);
  });

  it('should handle drag start properly', () => {
    const wrapper = mount(
      <Range disabled />
    );
    const instance = wrapper.find(PureRange).instance();
    jest.spyOn(instance, 'updateActiveThumb');
    jest.spyOn(instance, 'toggleGrabbed');
    jest.spyOn(instance, 'updateValues');

    wrapper.find(`.${classes['range-container-base']}`).getDOMNode().dispatchEvent(new MouseEvent('mousedown'));
    expect(instance.updateActiveThumb).toHaveBeenCalledTimes(0);
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(0);
    expect(instance.updateValues).toHaveBeenCalledTimes(0);

    wrapper.setProps({ disabled: false });
    wrapper.find(`.${classes['range-container-base']}`).getDOMNode().dispatchEvent(new MouseEvent('mousedown'));
    expect(instance.updateActiveThumb).toHaveBeenCalledTimes(1);
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(1);
    expect(instance.updateValues).toHaveBeenCalledTimes(1);
  });

  it('should handle drag end properly', () => {
    const wrapper = mount(
      <Range />
    );
    const instance = wrapper.find(PureRange).instance();
    jest.spyOn(instance, 'toggleGrabbed');
    jest.spyOn(instance, 'fireEvent');

    // simulate drag end (without start)
    window.dispatchEvent(new MouseEvent('mouseup'));
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(0);
    expect(instance.fireEvent).toHaveBeenCalledTimes(0);

    // simulate drag start
    wrapper.find(`.${classes['range-container-base']}`).getDOMNode().dispatchEvent(new MouseEvent('mousedown'));
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(1);
    expect(instance.fireEvent).toHaveBeenCalledTimes(0);

    // simulate drag end
    window.dispatchEvent(new MouseEvent('mouseup'));
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(2);
    expect(instance.fireEvent).toHaveBeenCalledTimes(1);
  });

  it('constrainValue() should return value properly', () => {
    const wrapper = mount(
      <Range min={2.5} max={200.1} step={1} />
    );
    const instance = wrapper.find(PureRange).instance();

    // эти значения идентичны тем, которые выдает <input type="range" />
    expect(instance.constrainValue(10)).toBe(10.5);
    expect(instance.constrainValue(1)).toBe(2.5);
    expect(instance.constrainValue(81 * 2.5)).toBe(199.5);
  });

  it('updateValues() should set start thumb value on drag start', () => {
    const wrapper = mount(
      <Range min={20} max={30} step={1} />
    );
    const instance = wrapper.find(PureRange).instance();

    jest.spyOn(instance.start, 'set');

    expect(instance.start.set).toHaveBeenCalledTimes(0);

    // simulate drag start
    wrapper.find(`.${classes['range-container-base']}`).getDOMNode().dispatchEvent(new MouseEvent('mousedown', {
      clientX: -10,
    }));
    expect(instance.start.set).toHaveBeenCalledTimes(1);
  });

  it('updateValues() should set finish thumb value on drag start', () => {
    const wrapper = mount(
      <Range min={20} max={30} step={1} />
    );
    const instance = wrapper.find(PureRange).instance();

    jest.spyOn(instance.finish, 'set');

    expect(instance.finish.set).toHaveBeenCalledTimes(0);

    // simulate drag start
    wrapper.find(`.${classes['range-container-base']}`).getDOMNode().dispatchEvent(new MouseEvent('mousedown', {
      clientX: 10,
    }));
    expect(instance.finish.set).toHaveBeenCalledTimes(1);
  });

  it('updateValues() should not set start/finish value', () => {
    const wrapper = mount(
      <Range min={20} max={30} step={1} />
    );
    const instance = wrapper.find(PureRange).instance();

    jest.spyOn(instance.finish, 'set');

    // simulate drag move (without start)
    window.dispatchEvent(new MouseEvent('mousemove'));
    expect(instance.finish.set).toHaveBeenCalledTimes(0);

    // simulate drag start
    wrapper.find(`.${classes['range-container-base']}`).getDOMNode().dispatchEvent(new MouseEvent('mousedown', {
      clientX: 10,
    }));
    expect(instance.finish.set).toHaveBeenCalledTimes(1);

    // simulate drag move
    window.dispatchEvent(new MouseEvent('mousemove', {
      clientX: 12,
    }));
    expect(instance.finish.set).toHaveBeenCalledTimes(2);
  });

  it('updateThumbElements() should not throw when elements is not defined', () => {
    const wrapper = mount(
      <Range min={20} max={30} step={1} />
    );
    const instance = wrapper.find(PureRange).instance();

    wrapper.unmount();

    expect(() => instance.updateThumbElements()).not.toThrow();
  });

  it('updateRangeElement() should not throw when elements is not defined', () => {
    const wrapper = mount(
      <Range min={20} max={30} step={1} />
    );
    const instance = wrapper.find(PureRange).instance();

    wrapper.unmount();

    expect(() => instance.updateRangeElement()).not.toThrow();
  });
});

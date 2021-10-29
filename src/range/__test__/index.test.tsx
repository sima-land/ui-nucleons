import React from 'react';
import { mount } from 'enzyme';
import { Range } from '..';

describe('<Range />', () => {
  it('should works without props', () => {
    const wrapper = mount(<Range />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "wrapperProps" prop', () => {
    const wrapper = mount(
      <Range wrapperProps={{ className: 'test-wrapper', 'data-test': 123 } as any} />,
    );

    expect(wrapper.find('.range-wrapper-base').prop('className')).toContain('test-wrapper');
    expect(wrapper.find('.range-wrapper-base').prop('data-test')).toBe(123);
  });

  it('should handle "disabled" prop', () => {
    const wrapper = mount(<Range disabled />);
    const instance = wrapper.instance();

    expect(wrapper.find('.range-wrapper-base').prop('className')).toContain('disabled');

    jest.spyOn(instance, 'toggleGrabbed' as any);

    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(0);
    wrapper.find('.range-container-base').getDOMNode().dispatchEvent(new MouseEvent('mousedown'));
    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(0);

    wrapper.setProps({ disabled: false });
    wrapper.find('.range-container-base').getDOMNode().dispatchEvent(new MouseEvent('mousedown'));
    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(1);
  });

  it('should handle "onChange" and "onSlide" props', () => {
    const spy = jest.fn();
    const otherSpy = jest.fn();
    const wrapper = mount(<Range min={10} max={20} step={2} onChange={spy} onSlide={otherSpy} />);
    const instance = wrapper.instance();
    expect(spy).toHaveBeenCalledTimes(0);

    // simulate drag start
    wrapper
      .find('.range-container-base')
      .getDOMNode()
      .dispatchEvent(
        new MouseEvent('mousedown', {
          clientX: 10,
        }),
      );
    expect(spy).toHaveBeenCalledTimes(0);
    expect(otherSpy).toHaveBeenCalledTimes(1);

    // simulate drag move
    jest.spyOn(instance, 'constrainValue' as any).mockImplementation(() => 14);
    window.dispatchEvent(
      new MouseEvent('mousemove', {
        clientX: 14,
      }),
    );
    expect(spy).toHaveBeenCalledTimes(0);
    expect(otherSpy).toHaveBeenCalledTimes(2);

    // simulate drag end (without start)
    window.dispatchEvent(
      new MouseEvent('mouseup', {
        clientX: 14,
      }),
    );

    expect(spy).toHaveBeenCalledTimes(1);
    expect(otherSpy).toHaveBeenCalledTimes(2);
  });

  it('should place thumbs and range properly on props change', () => {
    const wrapper = mount(<Range min={0} max={10} step={1} startValue={2} finishValue={4} />);

    expect((wrapper.find('.thumb-base').at(0).prop as any)('style').left).toBe('20%');
    expect((wrapper.find('.thumb-base').at(1).prop('style') as any).left).toBe('40%');
    expect((wrapper.find('.selected-base').prop('style') as any).left).toBe('20%');
    expect((wrapper.find('.selected-base').prop('style') as any).width).toBe('20%');

    // не знаю почему но работает только так
    wrapper.setProps({ finishValue: 6 });
    wrapper.setProps({ finishValue: 6 });
    expect((wrapper.find('.thumb-base').at(0).prop as any)('style').left).toBe('20%');
    expect((wrapper.find('.thumb-base').at(1).prop('style') as any).left).toBe('60%');
    expect((wrapper.find('.selected-base').prop('style') as any).left).toBe('20%');
    expect((wrapper.find('.selected-base').prop('style') as any).width).toBe('40%');

    wrapper.setProps({ startValue: undefined, finishValue: undefined });
    wrapper.setProps({ startValue: undefined, finishValue: undefined });
    expect((wrapper.find('.thumb-base').at(0).prop as any)('style').left).toBe('20%');
    expect((wrapper.find('.thumb-base').at(1).prop('style') as any).left).toBe('60%');
    expect((wrapper.find('.selected-base').prop('style') as any).left).toBe('20%');
    expect((wrapper.find('.selected-base').prop('style') as any).width).toBe('40%');
  });

  it('should unsubscribe event listeners on unmount', () => {
    const wrapper = mount(<Range />);

    (wrapper.instance() as any).componentWillUnmount();
  });

  it('should handle drag start properly', () => {
    const wrapper = mount(<Range disabled />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'updateActiveThumb' as any);
    jest.spyOn(instance, 'toggleGrabbed' as any);
    jest.spyOn(instance, 'updateValues' as any);

    wrapper.find('.range-container-base').getDOMNode().dispatchEvent(new MouseEvent('mousedown'));
    expect((instance as any).updateActiveThumb).toHaveBeenCalledTimes(0);
    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(0);
    expect((instance as any).updateValues).toHaveBeenCalledTimes(0);

    wrapper.setProps({ disabled: false });
    wrapper.find('.range-container-base').getDOMNode().dispatchEvent(new MouseEvent('mousedown'));
    expect((instance as any).updateActiveThumb).toHaveBeenCalledTimes(1);
    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(1);
    expect((instance as any).updateValues).toHaveBeenCalledTimes(1);
  });

  it('should handle drag end properly', () => {
    const wrapper = mount(<Range />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'toggleGrabbed' as any);
    jest.spyOn(instance, 'fireEvent' as any);

    // simulate drag end (without start)
    window.dispatchEvent(new MouseEvent('mouseup'));
    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(0);
    expect((instance as any).fireEvent).toHaveBeenCalledTimes(0);

    // simulate drag start
    wrapper.find('.range-container-base').getDOMNode().dispatchEvent(new MouseEvent('mousedown'));
    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(1);
    expect((instance as any).fireEvent).toHaveBeenCalledTimes(1);

    // simulate drag end
    window.dispatchEvent(new MouseEvent('mouseup'));
    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(2);
    expect((instance as any).fireEvent).toHaveBeenCalledTimes(2);
  });

  describe('constrainValue()', () => {
    it('should return value properly, INT step', () => {
      const wrapper = mount(<Range min={2.5} max={200.1} step={1} />);
      const instance = wrapper.instance();

      // эти значения идентичны тем, которые выдает <input type="range" />
      expect((instance as any).constrainValue(10)).toBe(10.5);
      expect((instance as any).constrainValue(1)).toBe(2.5);
      expect((instance as any).constrainValue(81 * 2.5)).toBe(199.5);
    });
    it('should return value properly, FLOAT step', () => {
      const wrapper = mount(<Range min={1} max={5} step={0.1} />);
      const instance = wrapper.instance();

      expect((instance as any).constrainValue(0.5)).toBe(1);
      expect((instance as any).constrainValue(1.04)).toBe(1);
      expect((instance as any).constrainValue(1.05)).toBe(1.1);
      expect((instance as any).constrainValue(1.1)).toBe(1.1);
      expect((instance as any).constrainValue(3.023)).toBe(3);
      expect((instance as any).constrainValue(5.1)).toBe(5);
      expect((instance as any).constrainValue(6)).toBe(5);
    });
  });

  it('updateValues() should set start thumb value on drag start', () => {
    const wrapper = mount(<Range min={20} max={30} step={1} />);
    const instance = wrapper.instance();

    jest.spyOn((instance as any).start, 'set');

    expect((instance as any).start.set).toHaveBeenCalledTimes(0);

    // simulate drag start
    wrapper
      .find('.range-container-base')
      .getDOMNode()
      .dispatchEvent(
        new MouseEvent('mousedown', {
          clientX: -10,
        }),
      );
    expect((instance as any).start.set).toHaveBeenCalledTimes(1);
  });

  it('updateValues() should set finish thumb value on drag start', () => {
    const wrapper = mount(<Range min={20} max={30} step={1} />);
    const instance = wrapper.instance();

    jest.spyOn((instance as any).finish, 'set');

    expect((instance as any).finish.set).toHaveBeenCalledTimes(0);

    // simulate drag start
    wrapper
      .find('.range-container-base')
      .getDOMNode()
      .dispatchEvent(
        new MouseEvent('mousedown', {
          clientX: 10,
        }),
      );
    expect((instance as any).finish.set).toHaveBeenCalledTimes(1);
  });

  it('updateValues() should not set start/finish value', () => {
    const wrapper = mount(<Range min={20} max={30} step={1} />);
    const instance = wrapper.instance();

    jest.spyOn((instance as any).finish, 'set');

    // simulate drag move (without start)
    window.dispatchEvent(new MouseEvent('mousemove'));
    expect((instance as any).finish.set).toHaveBeenCalledTimes(0);

    // simulate drag start
    wrapper
      .find('.range-container-base')
      .getDOMNode()
      .dispatchEvent(
        new MouseEvent('mousedown', {
          clientX: 10,
        }),
      );
    expect((instance as any).finish.set).toHaveBeenCalledTimes(1);

    // simulate drag move
    window.dispatchEvent(
      new MouseEvent('mousemove', {
        clientX: 12,
      }),
    );
    expect((instance as any).finish.set).toHaveBeenCalledTimes(2);
  });

  it('updateThumbElements() should not throw when elements is not defined', () => {
    const wrapper = mount(<Range min={20} max={30} step={1} />);
    const instance = wrapper.instance();

    wrapper.unmount();

    expect(() => (instance as any).updateThumbElements()).not.toThrow();
  });

  it('updateRangeElement() should not throw when elements is not defined', () => {
    const wrapper = mount(<Range min={20} max={30} step={1} />);
    const instance = wrapper.instance();

    wrapper.unmount();

    expect(() => (instance as any).updateRangeElement()).not.toThrow();
  });

  it('getPercents() should return zeros', () => {
    expect(Range.prototype.getPercents.call({ props: { min: 10, max: 5 } })).toEqual([0, 0]);
  });
});

import React from 'react';
import { mount } from 'enzyme';
import isFunction from 'lodash/isFunction';
import Draggable, { Draggable as PureDraggable } from '../draggable';
import classes from './draggable.scss';

describe('<Draggable />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <Draggable />
    );
    expect(wrapper.find(`.${classes['draggable-container']}`)).toHaveLength(1);
  });
  it('should init listeners after mount', () => {
    const testAddGlobalListener = jest.fn(
      (eventName, callback) => () => ({ eventName, callback })
    );

    expect(testAddGlobalListener).toHaveBeenCalledTimes(0);

    const wrapper = mount(
      <PureDraggable addGlobalListener={testAddGlobalListener} />
    );

    const testInstance = wrapper.instance();


    testInstance.handleMove = testInstance.handleMove.bind(testInstance);
    testInstance.handleMoveEnd = testInstance.handleMoveEnd.bind(testInstance);
    jest.spyOn(testInstance.handleMove, 'bind').mockImplementation(() => testInstance.handleMove);
    jest.spyOn(testInstance.handleMoveEnd, 'bind').mockImplementation(() => testInstance.handleMoveEnd);

    testAddGlobalListener.mockClear();
    expect(testAddGlobalListener).toHaveBeenCalledTimes(0);

    testInstance.componentDidMount();
    expect(testAddGlobalListener).toHaveBeenCalledTimes(5);

    // should bind self methods
    expect(testInstance.handleMove.bind).toHaveBeenCalledTimes(1);
    expect(testInstance.handleMoveEnd.bind).toHaveBeenCalledTimes(1);

    // should call "addGlobalListener" prop with event names and handlers
    expect(testAddGlobalListener.mock.calls[0][0]).toBe('mousemove');
    expect(testAddGlobalListener.mock.calls[1][0]).toBe('touchmove');
    expect(testAddGlobalListener.mock.calls[2][0]).toBe('mouseup');
    expect(testAddGlobalListener.mock.calls[3][0]).toBe('touchend');
    expect(testAddGlobalListener.mock.calls[4][0]).toBe('touchcancel');
    expect(testAddGlobalListener.mock.calls[0][1]).toBe(testInstance.handleMove);
    expect(testAddGlobalListener.mock.calls[1][1]).toBe(testInstance.handleMove);
    expect(testAddGlobalListener.mock.calls[2][1]).toBe(testInstance.handleMoveEnd);
    expect(testAddGlobalListener.mock.calls[3][1]).toBe(testInstance.handleMoveEnd);
    expect(testAddGlobalListener.mock.calls[4][1]).toBe(testInstance.handleMoveEnd);

    // should create this.unsubscribers
    expect(Array.isArray(testInstance.unsubscribers)).toBe(true);
    expect(testInstance.unsubscribers.every(isFunction)).toBe(true);
  });
  it('should call unsubscribers on unmount', () => {
    const testInstance = {
      unsubscribers: [jest.fn(), jest.fn(), jest.fn(), jest.fn(), jest.fn(), jest.fn()],
    };
    testInstance.unsubscribers.forEach(fn => {
      expect(fn).toHaveBeenCalledTimes(0);
    });
    PureDraggable.prototype.componentWillUnmount.call(testInstance);
    testInstance.unsubscribers.forEach(fn => {
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });
  it('should call "handleMove" method on window "mousemove" and "touchmove" events', () => {
    jest.spyOn(PureDraggable.prototype, 'handleMove');
    mount(
      <Draggable />
    );
    expect(PureDraggable.prototype.handleMove).toHaveBeenCalledTimes(0);
    window.dispatchEvent(new Event('mousemove'));
    expect(PureDraggable.prototype.handleMove).toHaveBeenCalledTimes(1);
    window.dispatchEvent(new Event('touchmove'));
    expect(PureDraggable.prototype.handleMove).toHaveBeenCalledTimes(2);
  });
  it('should call "onDragStart" prop on container "mousedown/touchstart" only when active', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Draggable
        active={false}
        onDragStart={spy}
      />
    );
    wrapper.find(`.${classes['draggable-container']}`).simulate('mousedown', { clientX: 0, clientY: 0 });
    wrapper.find(`.${classes['draggable-container']}`).simulate('touchstart', { clientX: 0, clientY: 0 });
    expect(spy).toHaveBeenCalledTimes(0);

    wrapper.setProps({ active: true });
    wrapper.find(`.${classes['draggable-container']}`).simulate('mousedown', { clientX: 0, clientY: 0 });
    expect(spy).toHaveBeenCalledTimes(1);
    wrapper.find(`.${classes['draggable-container']}`).simulate('touchstart', { clientX: 0, clientY: 0 });
    expect(spy).toHaveBeenCalledTimes(2);

    wrapper.setProps({ active: undefined });
    wrapper.find(`.${classes['draggable-container']}`).simulate('mousedown', { clientX: 0, clientY: 0 });
    expect(spy).toHaveBeenCalledTimes(3);
    wrapper.find(`.${classes['draggable-container']}`).simulate('touchstart', { clientX: 0, clientY: 0 });
    expect(spy).toHaveBeenCalledTimes(4);
  });
  it('should call "onDrag" prop on window "mousemove/touchmove" only after "mousedown" on container', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Draggable onDrag={spy} />
    );
    expect(spy).toHaveBeenCalledTimes(0);

    // without capture
    window.dispatchEvent(new MouseEvent('mousemove'));
    window.dispatchEvent(new Event('touchmove'));
    expect(spy).toHaveBeenCalledTimes(0);

    // start capture
    wrapper.find(`.${classes['draggable-container']}`).simulate('mousedown', { clientX: 0, clientY: 0 });

    // check calls
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 12, clientY: 23 }));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual({ offset: { x: 12, y: 23 } });

    window.dispatchEvent(new TouchEvent('touchmove', { touches: [{ clientX: 40, clientY: 50 }] }));
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[1][0]).toEqual({ offset: { x: 40, y: 50 } });
  });
  it('should call "onDragEnd" prop on window "mousemove/touchmove" only after "mousedown" on container', () => {
    const spy = jest.fn();
    const containerSelector = `.${classes['draggable-container']}`;
    const wrapper = mount(
      <Draggable onDragEnd={spy} />
    );

    window.dispatchEvent(new MouseEvent('mouseup', { clientX: 12, clientY: 23 }));
    expect(spy).toHaveBeenCalledTimes(0);

    // start capture
    wrapper.find(containerSelector).simulate('touchstart', { touches: [{ clientX: 0, clientY: 0 }] });
    expect(spy).toHaveBeenCalledTimes(0);

    window.dispatchEvent(new MouseEvent('mouseup'));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual({ offset: { x: 0, y: 0 } });
  });
  it('should handle "containerProps" prop', () => {
    const wrapper = mount(
      <Draggable containerProps={{ className: 'test-container', style: { width: 300, height: 300 } }} />
    );
    expect(wrapper.find(`.${classes['draggable-container']}`).prop('className')).toContain('test-container');
    expect(wrapper.find(`.${classes['draggable-container']}`).prop('style')).toEqual({
      width: 300,
      height: 300,
    });
  });
  it('should handle "axis" prop', () => {
    const wrapper = mount(
      <Draggable
        axis='x'
      />
    );

    // start capture
    wrapper.find(`.${classes['draggable-container']}`).simulate('touchstart', {
      touches: [{ clientX: 0, clientY: 0 }],
    });

    // simulate touchmove
    window.dispatchEvent(new TouchEvent('touchmove', {
      touches: [{ clientX: 65, clientY: 54 }],
    }));

    expect(
      wrapper.getDOMNode().querySelector(`.${classes.draggable}`).style.transform
    ).toBe('translate3d(65px, 0px, 0px)');

    // change axis
    wrapper.setProps({ axis: 'y' });

    // simulate touchmove
    window.dispatchEvent(new TouchEvent('touchmove', {
      touches: [{ clientX: 124, clientY: 235 }],
    }));

    expect(
      wrapper.getDOMNode().querySelector(`.${classes.draggable}`).style.transform
    ).toBe('translate3d(65px, 181px, 0px)');
  });
  it('should passControl to "initControl" prop', () => {
    let testControl = null;
    const initControlSpy = jest.fn(control => {
      testControl = control;
    });
    const wrapper = mount(
      <Draggable initControl={initControlSpy} transitionDuration={500} />
    );

    expect(initControlSpy).toHaveBeenCalledTimes(1);

    expect(
      wrapper.getDOMNode().querySelector(`.${classes.draggable}`).style.transition
    ).toBe('');
    testControl.toggleTransition(true);
    expect(
      wrapper.getDOMNode().querySelector(`.${classes.draggable}`).style.transition
    ).toBe('transform 500ms ease-out');
    testControl.toggleTransition(false);
    expect(
      wrapper.getDOMNode().querySelector(`.${classes.draggable}`).style.transition
    ).toBe('');
  });
  it('should toggle transition properly', () => {
    const wrapper = mount(
      <Draggable transitionDuration={1200} />
    );

    wrapper.find(PureDraggable).instance().toggleTransition(true);
    expect(
      wrapper.find(PureDraggable).getDOMNode().querySelector(`.${classes.draggable}`).style.transition
    ).toBe('transform 1200ms ease-out');
    wrapper.find(PureDraggable).instance().toggleTransition(false);
    expect(
      wrapper.find(PureDraggable).getDOMNode().querySelector(`.${classes.draggable}`).style.transition
    ).toBe('');

    wrapper.setProps({ transitionDuration: undefined });
    expect(
      wrapper.find(PureDraggable).getDOMNode().querySelector(`.${classes.draggable}`).style.transition
    ).toBe('');
    wrapper.find(PureDraggable).instance().toggleTransition(true);
    expect(
      wrapper.find(PureDraggable).getDOMNode().querySelector(`.${classes.draggable}`).style.transition
    ).toBe('transform 320ms ease-out');

    wrapper.setProps({ transitionDuration: null });
    expect(
      wrapper.find(PureDraggable).getDOMNode().querySelector(`.${classes.draggable}`).style.transition
    ).toBe('transform 0ms ease-out');
    wrapper.find(PureDraggable).instance().toggleTransition(true);
    expect(
      wrapper.find(PureDraggable).getDOMNode().querySelector(`.${classes.draggable}`).style.transition
    ).toBe('transform 0ms ease-out');
  });
});

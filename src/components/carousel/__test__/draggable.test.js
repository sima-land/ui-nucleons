import React from 'react';
import { mount } from 'enzyme';
import isFunction from 'lodash/isFunction';
import Draggable, { Draggable as PureDraggable } from '../draggable';
import DraggableEvent from '../helpers/draggable-event';
import classes from '../draggable.scss';

/**
 * Возвращает поддельное событие мыши.
 * @param {number} [clientX=0] Значение свойства clientX.
 * @param {number} [clientY=0] Значение свойства clientY.
 * @param {number} [button=0] Значение свойства button.
 * @return {Object} Поддельное событие.
 */
const makeMouseEvent = (clientX = 0, clientY = 0, button = 0) => ({ clientX, clientY, button });

/**
 * Возвращает поддельное touch-событие.
 * @param {number} [clientX=0] Значение свойства clientX первого объекта из списка touches.
 * @param {number} [clientY=0] Значение свойства clientY первого объекта из списка touches.
 * @return {Object} Поддельное событие.
 */
const makeTouchEvent = (clientX = 0, clientY = 0) => ({ touches: [{ clientX, clientY }] });

describe('<Draggable />', () => {
  let initialGetSelection;
  beforeAll(() => {
    initialGetSelection = window.getSelection;
    window.getSelection = jest.fn(() => ({ removeAllRanges: jest.fn() }));
  });
  afterAll(() => {
    window.getSelection = initialGetSelection;
  });
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
    wrapper.find(`.${classes['draggable-container']}`).simulate('mousedown', makeMouseEvent());
    wrapper.find(`.${classes['draggable-container']}`).simulate('touchstart', makeTouchEvent());
    expect(spy).toHaveBeenCalledTimes(0);

    wrapper.setProps({ active: true });
    wrapper.find(`.${classes['draggable-container']}`).simulate('mousedown', makeMouseEvent());
    expect(spy).toHaveBeenCalledTimes(1);
    wrapper.find(`.${classes['draggable-container']}`).simulate('touchstart', makeTouchEvent());
    expect(spy).toHaveBeenCalledTimes(2);

    wrapper.setProps({ active: undefined });
    wrapper.find(`.${classes['draggable-container']}`).simulate('mousedown', makeMouseEvent());
    expect(spy).toHaveBeenCalledTimes(3);
    wrapper.find(`.${classes['draggable-container']}`).simulate('touchstart', makeTouchEvent());
    expect(spy).toHaveBeenCalledTimes(4);
  });
  it('should call "onDragMove" prop on window "mousemove/touchmove" only after "mousedown" on container', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Draggable onDragMove={spy} />
    );
    expect(spy).toHaveBeenCalledTimes(0);

    // without capture
    window.dispatchEvent(new MouseEvent('mousemove'));
    window.dispatchEvent(new Event('touchmove'));
    expect(spy).toHaveBeenCalledTimes(0);

    // start capture
    wrapper.find(`.${classes['draggable-container']}`).simulate('mousedown', makeMouseEvent());

    // check calls
    window.dispatchEvent(new MouseEvent('mousemove', makeMouseEvent(12, 23)));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual(new DraggableEvent({
      offset: { x: 0, y: 0 },
      client: { x: 12, y: 23 },
    }));

    window.dispatchEvent(new TouchEvent('touchmove', makeTouchEvent(40, 50)));
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[1][0]).toEqual(new DraggableEvent({
      offset: { x: 12, y: 23 },
      client: { x: 40, y: 50 },
    }));
  });
  it('should call "onDragEnd" prop on window "mousemove/touchmove" only after "mousedown" on container', () => {
    const spy = jest.fn();
    const containerSelector = `.${classes['draggable-container']}`;
    const wrapper = mount(
      <Draggable onDragEnd={spy} />
    );

    window.dispatchEvent(new MouseEvent('mouseup', makeMouseEvent(12, 23)));
    expect(spy).toHaveBeenCalledTimes(0);

    // start capture
    wrapper.find(containerSelector).simulate('touchstart', makeTouchEvent());
    expect(spy).toHaveBeenCalledTimes(0);

    window.dispatchEvent(new MouseEvent('mousemove', makeMouseEvent(10, 20)));
    window.dispatchEvent(new MouseEvent('mouseup', makeMouseEvent(10, 20)));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual(new DraggableEvent({
      offset: { x: 10, y: 20 },
      client: { x: 10, y: 20 },
    }));
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
    wrapper.find(`.${classes['draggable-container']}`).simulate('touchstart', makeTouchEvent());

    // simulate touchmove
    window.dispatchEvent(new TouchEvent('touchmove', makeTouchEvent(65, 54)));

    expect(
      wrapper.getDOMNode().querySelector(`.${classes.draggable}`).style.transform
    ).toBe('translate3d(65px, 0px, 0px)');

    // change axis
    wrapper.setProps({ axis: 'y' });

    // simulate touchmove
    window.dispatchEvent(new TouchEvent('touchmove', makeTouchEvent(124, 235)));

    expect(
      wrapper.getDOMNode().querySelector(`.${classes.draggable}`).style.transform
    ).toBe('translate3d(65px, 181px, 0px)');
  });
  it('should passControl to "takeControl" prop', () => {
    let testControl = null;
    const takeControlSpy = jest.fn(control => {
      testControl = control;
    });
    const wrapper = mount(
      <Draggable takeControl={takeControlSpy} transitionDuration={500} />
    );

    expect(takeControlSpy).toHaveBeenCalledTimes(1);
    expect(isFunction(takeControlSpy.mock.calls[0][0].isGrabbed)).toBe(true);
    expect(isFunction(takeControlSpy.mock.calls[0][0].setOffset)).toBe(true);
    expect(isFunction(takeControlSpy.mock.calls[0][0].toggleTransition)).toBe(true);

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
  it('should not apply offset if draggable event is prevented', () => {
    const spy = jest.fn(draggableEvent => draggableEvent.preventDefault());
    const wrapper = mount(
      <Draggable onDrag={spy} />
    );

    // check initial offset
    expect(wrapper.find(`.${classes.draggable}`).getDOMNode().style.transform).toBe('translate3d(0px, 0px, 0px)');

    // simulate drag (mouse down + move)
    wrapper.find(`.${classes['draggable-container']}`).simulate('mousedown', makeMouseEvent(0, 0));
    window.dispatchEvent(new Event('mousemove', makeMouseEvent(90, 210)));

    expect(wrapper.find(`.${classes.draggable}`).getDOMNode().style.transform).toBe('translate3d(0px, 0px, 0px)');
  });
  it('should prevent click after move', () => {
    const wrapper = mount(
      <Draggable />
    );
    const draggableContainer = wrapper.find(`.${classes['draggable-container']}`);
    let testClickEvent;

    // simulate click start (without move)
    draggableContainer.simulate('mousedown', makeMouseEvent(0, 0));

    // check click handle
    testClickEvent = new Event('click');
    jest.spyOn(testClickEvent, 'preventDefault');
    expect(testClickEvent.preventDefault).toHaveBeenCalledTimes(0);
    draggableContainer.prop('onClick')(testClickEvent);
    expect(testClickEvent.preventDefault).toHaveBeenCalledTimes(0);

    // simulate drag (mouse down + move)
    draggableContainer.simulate('mousedown', makeMouseEvent(0, 0));
    window.dispatchEvent(new Event('mousemove', makeMouseEvent(10, 20)));

    // check click handle
    testClickEvent = new Event('click');
    jest.spyOn(testClickEvent, 'preventDefault');
    expect(testClickEvent.preventDefault).toHaveBeenCalledTimes(0);
    draggableContainer.prop('onClick')(testClickEvent);
    expect(testClickEvent.preventDefault).toHaveBeenCalledTimes(1);
  });
  it('handleMove should not apply new offset if custom event was prevented', () => {
    const spy = jest.fn(draggableEvent => draggableEvent.preventDefault());
    const wrapper = mount(
      <Draggable onDragMove={spy} />
    );

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(PureDraggable).instance().startCapture(new MouseEvent('mousedown', { clientX: 10, clientY: 20 }));

    jest.spyOn(wrapper.find(PureDraggable).instance(), 'saveClientPosition');
    jest.spyOn(wrapper.find(PureDraggable).instance(), 'setOffset');
    wrapper.find(PureDraggable).instance().handleMove(new MouseEvent('mousemove', { clientX: 12, clientY: 23 }));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(wrapper.find(PureDraggable).instance().saveClientPosition).toHaveBeenCalledTimes(0);
    expect(wrapper.find(PureDraggable).instance().setOffset).toHaveBeenCalledTimes(0);
  });
  it('handleMove should apply new offset if custom event was not prevented', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Draggable onDragMove={spy} />
    );

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(PureDraggable).instance().startCapture(new MouseEvent('mousedown', { clientX: 10, clientY: 20 }));

    jest.spyOn(wrapper.find(PureDraggable).instance(), 'saveClientPosition');
    jest.spyOn(wrapper.find(PureDraggable).instance(), 'setOffset');
    wrapper.find(PureDraggable).instance().handleMove(new MouseEvent('mousemove', { clientX: 12, clientY: 23 }));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(wrapper.find(PureDraggable).instance().saveClientPosition).toHaveBeenCalledTimes(1);
    expect(wrapper.find(PureDraggable).instance().setOffset).toHaveBeenCalledTimes(1);
  });
  it('should pass object with "isGrabbed" method to "takeControl" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <Draggable takeControl={spy} />
    );

    expect(spy).toHaveBeenCalledTimes(1);
    expect(isFunction(spy.mock.calls[0][0].isGrabbed)).toBe(true);

    wrapper.find(PureDraggable).instance().toggleGrabbed(true);
    expect(spy.mock.calls[0][0].isGrabbed()).toBe(true);
    wrapper.find(PureDraggable).instance().toggleGrabbed(false);
    expect(spy.mock.calls[0][0].isGrabbed()).toBe(false);
  });
});

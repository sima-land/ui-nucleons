import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { isFunction } from 'lodash';
import Draggable from '../draggable';
import DraggableEvent from '../helpers/draggable-event';

/**
 * Возвращает поддельное событие мыши.
 * @param clientX Значение свойства clientX.
 * @param clientY Значение свойства clientY.
 * @param button Значение свойства button.
 * @return Поддельное событие.
 */
const makeMouseEvent = (clientX = 0, clientY = 0, button = 0): any => ({
  clientX,
  clientY,
  button,
});

/**
 * Возвращает поддельное touch-событие.
 * @param clientX Значение свойства clientX первого объекта из списка touches.
 * @param clientY Значение свойства clientY первого объекта из списка touches.
 * @return Поддельное событие.
 */
const makeTouchEvent = (clientX = 0, clientY = 0): any => ({
  touches: [{ clientX, clientY }],
});

describe('<Draggable />', () => {
  const getDraggableEl = (w: ReactWrapper) =>
    w.find('div.draggable').getDOMNode() as HTMLDivElement;

  let initialGetSelection: any;

  beforeAll(() => {
    initialGetSelection = window.getSelection;
    window.getSelection = jest.fn(() => ({
      removeAllRanges: jest.fn(),
    })) as any;
  });

  afterAll(() => {
    window.getSelection = initialGetSelection;
  });

  it('should render without props', () => {
    const wrapper = mount(<Draggable />);
    expect(wrapper.find('.draggable-container')).toHaveLength(1);
  });

  it('should call offList on unmount', () => {
    const testInstance = {
      offList: [
        jest.fn(),
        jest.fn(),
        jest.fn(),
        jest.fn(),
        jest.fn(),
        jest.fn(),
      ],
    };
    testInstance.offList.forEach(fn => {
      expect(fn).toHaveBeenCalledTimes(0);
    });
    Draggable.prototype.componentWillUnmount.call(testInstance);
    testInstance.offList.forEach(fn => {
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  it('should call "handleMove" method on window "mousemove" and "touchmove" events', () => {
    jest.spyOn(Draggable.prototype, 'handleMove');
    mount(<Draggable />);
    expect(Draggable.prototype.handleMove).toHaveBeenCalledTimes(0);
    window.dispatchEvent(new Event('mousemove'));
    expect(Draggable.prototype.handleMove).toHaveBeenCalledTimes(1);
    window.dispatchEvent(new Event('touchmove'));
    expect(Draggable.prototype.handleMove).toHaveBeenCalledTimes(2);
  });

  it('should call "onDragStart" prop on container "mousedown/touchstart" only when active', () => {
    const spy = jest.fn();
    const wrapper = mount(<Draggable active={false} onDragStart={spy} />);
    wrapper
      .find('.draggable-container')
      .simulate('mousedown', makeMouseEvent());
    wrapper
      .find('.draggable-container')
      .simulate('touchstart', makeTouchEvent());
    expect(spy).toHaveBeenCalledTimes(0);

    wrapper.setProps({ active: true });
    wrapper
      .find('.draggable-container')
      .simulate('mousedown', makeMouseEvent());
    expect(spy).toHaveBeenCalledTimes(1);
    wrapper
      .find('.draggable-container')
      .simulate('touchstart', makeTouchEvent());
    expect(spy).toHaveBeenCalledTimes(2);

    wrapper.setProps({ active: undefined });
    wrapper
      .find('.draggable-container')
      .simulate('mousedown', makeMouseEvent());
    expect(spy).toHaveBeenCalledTimes(3);
    wrapper
      .find('.draggable-container')
      .simulate('touchstart', makeTouchEvent());
    expect(spy).toHaveBeenCalledTimes(4);
  });

  it('should call "onDragMove" prop on window "mousemove/touchmove" only after "mousedown" on container', () => {
    const spy = jest.fn();
    const wrapper = mount(<Draggable onDragMove={spy} />);
    expect(spy).toHaveBeenCalledTimes(0);

    // without capture
    window.dispatchEvent(new MouseEvent('mousemove'));
    window.dispatchEvent(new Event('touchmove'));
    expect(spy).toHaveBeenCalledTimes(0);

    // start capture
    wrapper
      .find('.draggable-container')
      .simulate('mousedown', makeMouseEvent());

    // check calls
    window.dispatchEvent(new MouseEvent('mousemove', makeMouseEvent(12, 23)));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual(
      new DraggableEvent({
        offset: { x: 0, y: 0 },
        client: { x: 12, y: 23 },
      }),
    );

    window.dispatchEvent(new TouchEvent('touchmove', makeTouchEvent(40, 50)));
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[1][0]).toEqual(
      new DraggableEvent({
        offset: { x: 12, y: 23 },
        client: { x: 40, y: 50 },
      }),
    );
  });

  it('should call "onDragEnd" prop on window "mousemove/touchmove" only after "mousedown" on container', () => {
    const spy = jest.fn();
    const containerSelector = '.draggable-container';
    const wrapper = mount(<Draggable onDragEnd={spy} />);

    window.dispatchEvent(new MouseEvent('mouseup', makeMouseEvent(12, 23)));
    expect(spy).toHaveBeenCalledTimes(0);

    // start capture
    wrapper.find(containerSelector).simulate('touchstart', makeTouchEvent());
    expect(spy).toHaveBeenCalledTimes(0);

    window.dispatchEvent(new MouseEvent('mousemove', makeMouseEvent(10, 20)));
    window.dispatchEvent(new MouseEvent('mouseup', makeMouseEvent(10, 20)));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual(
      new DraggableEvent({
        offset: { x: 10, y: 20 },
        client: { x: 10, y: 20 },
      }),
    );
  });

  it('should handle "containerProps" prop', () => {
    const wrapper = mount(
      <Draggable
        containerProps={{
          className: 'test-container',
          style: { width: 300, height: 300 },
        }}
      />,
    );
    expect(wrapper.find('.draggable-container').prop('className')).toContain(
      'test-container',
    );
    expect(wrapper.find('.draggable-container').prop('style')).toEqual({
      width: 300,
      height: 300,
    });
  });

  it('should handle "axis" prop', () => {
    const wrapper = mount(<Draggable axis='x' />);

    // start capture
    wrapper
      .find('.draggable-container')
      .simulate('touchstart', makeTouchEvent());

    // simulate touchmove
    window.dispatchEvent(new TouchEvent('touchmove', makeTouchEvent(65, 54)));

    expect(
      (wrapper.getDOMNode().querySelector('.draggable') as any).style.transform,
    ).toBe('translate3d(65px, 0px, 0px)');

    // change axis
    wrapper.setProps({ axis: 'y' });

    // simulate touchmove
    window.dispatchEvent(new TouchEvent('touchmove', makeTouchEvent(124, 235)));

    expect(
      (wrapper.getDOMNode().querySelector('.draggable') as any).style.transform,
    ).toBe('translate3d(65px, 181px, 0px)');
  });

  it('should passControl to "takeControl" prop', () => {
    let testControl: any = null;

    const takeControlSpy = jest.fn(control => {
      testControl = control;
    });

    const wrapper = mount(
      <Draggable takeControl={takeControlSpy} transitionDuration={500} />,
    );

    expect(takeControlSpy).toHaveBeenCalledTimes(1);
    expect(isFunction(takeControlSpy.mock.calls[0][0].isGrabbed)).toBe(true);
    expect(isFunction(takeControlSpy.mock.calls[0][0].setOffset)).toBe(true);
    expect(isFunction(takeControlSpy.mock.calls[0][0].toggleTransition)).toBe(
      true,
    );

    expect(
      (wrapper.getDOMNode().querySelector('.draggable') as any).style
        .transition,
    ).toBe('');
    testControl.toggleTransition(true);
    expect(
      (wrapper.getDOMNode().querySelector('.draggable') as any).style
        .transition,
    ).toBe('transform 500ms ease-out');
    testControl.toggleTransition(false);
    expect(
      (wrapper.getDOMNode().querySelector('.draggable') as any).style
        .transition,
    ).toBe('');
  });

  it('should toggle transition properly', () => {
    const wrapper = mount(<Draggable transitionDuration={1200} />);

    (wrapper.instance() as any).toggleTransition(true);
    expect(getDraggableEl(wrapper).style.transition).toBe(
      'transform 1200ms ease-out',
    );
    (wrapper.instance() as any).toggleTransition(false);
    expect(getDraggableEl(wrapper).style.transition).toBe('');

    wrapper.setProps({ transitionDuration: undefined });
    expect(getDraggableEl(wrapper).style.transition).toBe('');
    (wrapper.instance() as any).toggleTransition(true);
    expect(getDraggableEl(wrapper).style.transition).toBe(
      'transform 320ms ease-out',
    );

    wrapper.setProps({ transitionDuration: null });
    expect(getDraggableEl(wrapper).style.transition).toBe(
      'transform 0ms ease-out',
    );
    (wrapper.instance() as any).toggleTransition(true);
    expect(getDraggableEl(wrapper).style.transition).toBe(
      'transform 0ms ease-out',
    );
  });

  it('should not apply offset if draggable event is prevented', () => {
    const wrapper = mount(<Draggable />);

    // check initial offset
    expect(getDraggableEl(wrapper).style.transform).toBe(
      'translate3d(0px, 0px, 0px)',
    );

    // simulate drag (mouse down + move)
    wrapper
      .find('.draggable-container')
      .simulate('mousedown', makeMouseEvent(0, 0));
    window.dispatchEvent(new Event('mousemove', makeMouseEvent(90, 210)));

    expect(getDraggableEl(wrapper).style.transform).toBe(
      'translate3d(0px, 0px, 0px)',
    );
  });

  it('should prevent click after move', () => {
    const wrapper = mount(<Draggable />);

    const draggableContainer = wrapper.find('.draggable-container');

    let testClickEvent;

    // simulate click start (without move)
    draggableContainer.simulate('mousedown', makeMouseEvent(0, 0));

    // check click handle
    testClickEvent = new Event('click');
    jest.spyOn(testClickEvent, 'preventDefault');
    expect(testClickEvent.preventDefault).toHaveBeenCalledTimes(0);
    (draggableContainer.prop('onClick') as any)(testClickEvent);
    expect(testClickEvent.preventDefault).toHaveBeenCalledTimes(0);

    // simulate drag (mouse down + move)
    draggableContainer.simulate('mousedown', makeMouseEvent(0, 0));
    window.dispatchEvent(new Event('mousemove', makeMouseEvent(10, 20)));

    // check click handle
    testClickEvent = new Event('click');
    jest.spyOn(testClickEvent, 'preventDefault');
    expect(testClickEvent.preventDefault).toHaveBeenCalledTimes(0);
    (draggableContainer.prop('onClick') as any)(testClickEvent);
    expect(testClickEvent.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('handleMove should not apply new offset if custom event was prevented', () => {
    const spy = jest.fn(draggableEvent => draggableEvent.preventDefault());
    const wrapper = mount(<Draggable onDragMove={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);
    (wrapper.instance() as any).startCapture(
      new MouseEvent('mousedown', { clientX: 10, clientY: 20 }),
    );

    jest.spyOn(wrapper.instance(), 'saveClientPosition' as any);
    jest.spyOn(wrapper.instance(), 'setOffset' as any);

    (wrapper.instance() as any).handleMove(
      new MouseEvent('mousemove', { clientX: 12, clientY: 23 }),
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(
      (wrapper.instance() as any).saveClientPosition,
    ).toHaveBeenCalledTimes(0);
    expect((wrapper.instance() as any).setOffset).toHaveBeenCalledTimes(0);
  });

  it('handleMove should apply new offset if custom event was not prevented', () => {
    const spy = jest.fn();
    const wrapper = mount(<Draggable onDragMove={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);
    (wrapper.instance() as any).startCapture(
      new MouseEvent('mousedown', { clientX: 10, clientY: 20 }),
    );

    jest.spyOn(wrapper.instance(), 'saveClientPosition' as any);
    jest.spyOn(wrapper.instance(), 'setOffset' as any);
    (wrapper.instance() as any).handleMove(
      new MouseEvent('mousemove', { clientX: 12, clientY: 23 }),
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(
      (wrapper.instance() as any).saveClientPosition,
    ).toHaveBeenCalledTimes(1);
    expect((wrapper.instance() as any).setOffset).toHaveBeenCalledTimes(1);
  });

  it('should pass object with "isGrabbed" method to "takeControl" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(<Draggable takeControl={spy} />);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(isFunction(spy.mock.calls[0][0].isGrabbed)).toBe(true);

    (wrapper.instance() as any).toggleGrabbed(true);
    expect(spy.mock.calls[0][0].isGrabbed()).toBe(true);
    (wrapper.instance() as any).toggleGrabbed(false);
    expect(spy.mock.calls[0][0].isGrabbed()).toBe(false);
  });
});

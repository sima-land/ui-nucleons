import { it, expect, describe, jest } from '@jest/globals';
import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Point } from '../../helpers/point';
import { getTransitionStyle } from '../../helpers/styles';
import { Draggable } from '../draggable';

describe('Draggable', () => {
  it('constructor()', () => {
    const instance = new Draggable({});

    expect(instance.isGrabbed).toBe(false);
    expect(instance.hasTransition).toBe(false);
    expect(instance.needPreventClick).toBe(false);
    expect(instance.currentOffset).toEqual(Point());
    expect(instance.clientPosition).toEqual(Point());
    expect(instance.draggableRef).toEqual(createRef());
    expect(instance.offList).toEqual([]);
  });

  it('componentDidMount()', () => {
    const instance = new Draggable({});

    jest.spyOn(instance, 'initGlobalListeners');
    jest.spyOn(instance, 'passControl');

    expect(instance.initGlobalListeners).toHaveBeenCalledTimes(0);
    expect(instance.passControl).toHaveBeenCalledTimes(0);

    instance.componentDidMount();

    expect(instance.initGlobalListeners).toHaveBeenCalledTimes(1);
    expect(instance.passControl).toHaveBeenCalledTimes(1);
  });

  it('initGlobalListeners()', () => {
    const instance = new Draggable({});

    expect(instance.offList).toEqual([]);
    instance.initGlobalListeners();
    expect(instance.offList).toHaveLength(5);
  });

  it('passControl()', () => {
    const spy = jest.fn();
    const instance = new Draggable({ takeControl: spy });

    expect(spy).toHaveBeenCalledTimes(0);
    instance.passControl();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('componentWillUnmount()', () => {
    const instance = new Draggable({});
    const spy = jest.fn();
    instance.offList = [spy];

    expect(spy).toHaveBeenCalledTimes(0);
    instance.componentWillUnmount();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('startCapture() should do nothing when active false', () => {
    const instance = new Draggable({ active: false });

    jest.spyOn(instance, 'toggleGrabbed');
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(0);
    instance.startCapture(new MouseEvent('test'));
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(0);
  });

  it('startCapture() should works when active true', () => {
    const spy = jest.fn();
    const instance = new Draggable({ active: true, onDragStart: spy });

    const event = new MouseEvent('test');

    jest.spyOn(event, 'preventDefault');
    jest.spyOn(instance, 'toggleGrabbed');
    jest.spyOn(instance, 'saveClientPosition');

    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    expect(spy).toHaveBeenCalledTimes(0);
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(0);
    expect(instance.saveClientPosition).toHaveBeenCalledTimes(0);

    instance.startCapture(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(1);
    expect(instance.saveClientPosition).toHaveBeenCalledTimes(1);
  });

  it('startCapture() should works when active undefined', () => {
    const spy = jest.fn();
    const instance = new Draggable({ active: undefined, onDragStart: spy });

    const event = new MouseEvent('test');

    jest.spyOn(event, 'preventDefault');
    jest.spyOn(instance, 'toggleGrabbed');
    jest.spyOn(instance, 'saveClientPosition');

    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    expect(spy).toHaveBeenCalledTimes(0);
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(0);
    expect(instance.saveClientPosition).toHaveBeenCalledTimes(0);

    instance.startCapture(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(1);
    expect(instance.saveClientPosition).toHaveBeenCalledTimes(1);
  });

  it('startCapture() should works when active for touch events', () => {
    const spy = jest.fn();
    const instance = new Draggable({ active: undefined, onDragStart: spy });

    const event = new TouchEvent('test');

    jest.spyOn(event, 'preventDefault');
    jest.spyOn(instance, 'toggleGrabbed');
    jest.spyOn(instance, 'saveClientPosition');

    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    expect(spy).toHaveBeenCalledTimes(0);
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(0);
    expect(instance.saveClientPosition).toHaveBeenCalledTimes(0);

    instance.startCapture(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(1);
    expect(instance.saveClientPosition).toHaveBeenCalledTimes(1);
  });

  it('startCapture() should force blur on activeElement', () => {
    const spy = jest.fn();
    const instance = new Draggable({ active: undefined, onDragStart: spy });

    const event = new MouseEvent('test');
    jest.spyOn(event, 'preventDefault');

    const input = document.createElement('input');
    document.body.append(input);
    input.focus();

    expect(document.activeElement === input).toBe(true);
    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    instance.startCapture(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(document.activeElement === input).toBe(false);
    input.remove();
  });

  it('startCapture() should NOT force blur on activeElement when is not defined', () => {
    const spy = jest.fn();
    const instance = new Draggable({ active: undefined, onDragStart: spy });

    const activeElementDescriptor = Object.getOwnPropertyDescriptor(
      Document.prototype,
      'activeElement',
    );

    Object.defineProperty(document, 'activeElement', { value: null, writable: true });

    const event = new MouseEvent('test');
    jest.spyOn(event, 'preventDefault');

    expect(document.activeElement).toBe(null);
    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    expect(() => instance.startCapture(event)).not.toThrow();
    expect(event.preventDefault).toHaveBeenCalledTimes(1);

    Object.defineProperty(Document.prototype, 'activeElement', activeElementDescriptor as any);
  });

  it('handleMove() should do nothing when isGrabbed false', () => {
    const instance = new Draggable({});

    jest.spyOn(instance, 'getClientDelta');
    expect(instance.getClientDelta).toHaveBeenCalledTimes(0);
    instance.handleMove(new MouseEvent('test'));
    expect(instance.getClientDelta).toHaveBeenCalledTimes(0);
  });

  it('handleMove() should works when isGrabbed true', () => {
    const spy = jest.fn();
    const instance = new Draggable({ onDragMove: spy });

    instance.toggleGrabbed(true);
    jest.spyOn(instance, 'getClientDelta');
    jest.spyOn(instance, 'saveClientPosition');

    expect(spy).toHaveBeenCalledTimes(0);
    expect(instance.getClientDelta).toHaveBeenCalledTimes(0);
    expect(instance.saveClientPosition).toHaveBeenCalledTimes(0);

    instance.handleMove(new MouseEvent('test'));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(instance.getClientDelta).toHaveBeenCalledTimes(1);
    expect(instance.saveClientPosition).toHaveBeenCalledTimes(1);
  });

  it('handleMove() should handle preventing of custom event', () => {
    const instance = new Draggable({ onDragMove: e => e.preventDefault() });

    instance.toggleGrabbed(true);
    jest.spyOn(instance, 'setOffset');
    jest.spyOn(instance, 'saveClientPosition');

    expect(instance.setOffset).toHaveBeenCalledTimes(0);
    expect(instance.saveClientPosition).toHaveBeenCalledTimes(0);

    instance.handleMove(new MouseEvent('test'));
    expect(instance.setOffset).toHaveBeenCalledTimes(0);
    expect(instance.saveClientPosition).toHaveBeenCalledTimes(0);
  });

  it('handleMove() should handle axis prop', () => {
    const instance = new Draggable({ axis: 'y' });

    instance.toggleGrabbed(true);

    expect(instance.currentOffset.x).toBe(0);
    expect(instance.currentOffset.y).toBe(0);
    instance.handleMove(new MouseEvent('test', { clientX: 100, clientY: 200 }));
    expect(instance.currentOffset.x).toBe(0);
    expect(instance.currentOffset.y).toBe(200);
  });

  it('handleMove() should handle axis prop when it is x', () => {
    const instance = new Draggable({ axis: 'x' });

    instance.toggleGrabbed(true);

    expect(instance.currentOffset.x).toBe(0);
    expect(instance.currentOffset.y).toBe(0);
    instance.handleMove(new MouseEvent('test', { clientX: 100, clientY: 200 }));
    expect(instance.currentOffset.x).toBe(100);
    expect(instance.currentOffset.y).toBe(0);
  });

  it('handleMove() should works when isGrabbed true fot touch events', () => {
    const spy = jest.fn();
    const instance = new Draggable({ onDragMove: spy });

    const event = new TouchEvent('test');
    instance.toggleGrabbed(true);
    jest.spyOn(instance, 'getClientDelta');
    jest.spyOn(window, 'getSelection');
    jest.spyOn(event, 'preventDefault');

    expect(window.getSelection).toHaveBeenCalledTimes(0);
    expect(spy).toHaveBeenCalledTimes(0);
    expect(instance.getClientDelta).toHaveBeenCalledTimes(0);
    expect(event.preventDefault).toHaveBeenCalledTimes(0);

    instance.handleMove(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    expect(window.getSelection).toHaveBeenCalledTimes(0);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(instance.getClientDelta).toHaveBeenCalledTimes(1);
  });

  it('handleMoveEnd() should do not call onDragEnd when isGrabbed false', () => {
    const spy = jest.fn();
    const instance = new Draggable({ onDragEnd: spy });

    const event = new MouseEvent('test');
    jest.spyOn(event, 'preventDefault');
    instance.toggleGrabbed(false);

    expect(spy).toHaveBeenCalledTimes(0);
    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    instance.handleMoveEnd(event);
    expect(spy).toHaveBeenCalledTimes(0);
    expect(event.preventDefault).toHaveBeenCalledTimes(0);
  });

  it('handleMoveEnd() should do not call onDragEnd when onDragEnd is undefined', () => {
    const instance = new Draggable({ onDragEnd: undefined });

    const event = new MouseEvent('test');
    jest.spyOn(event, 'preventDefault');
    instance.toggleGrabbed(false);

    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    instance.handleMoveEnd(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(0);
  });

  it('handleMoveEnd() should works when isGrabbed true', () => {
    const spy = jest.fn();
    const instance = new Draggable({ onDragEnd: spy });

    const event = new MouseEvent('test');
    jest.spyOn(event, 'preventDefault');
    instance.toggleGrabbed(true);

    expect(spy).toHaveBeenCalledTimes(0);
    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    instance.handleMoveEnd(event);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('handleClickCapture()', () => {
    const instance = new Draggable({});

    const event = { preventDefault: jest.fn() } as any;
    jest.spyOn(event, 'preventDefault');
    instance.togglePreventClickNeed(true);
    jest.spyOn(instance, 'togglePreventClickNeed');

    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    expect(instance.togglePreventClickNeed).toHaveBeenCalledTimes(0);
    instance.handleClickCapture(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(instance.togglePreventClickNeed).toHaveBeenCalledTimes(1);
  });

  it('handleClickCapture() should do nothing when needPreventClick false', () => {
    const instance = new Draggable({});

    const event = { preventDefault: jest.fn() } as any;
    jest.spyOn(event, 'preventDefault');
    instance.togglePreventClickNeed(false);
    jest.spyOn(instance, 'togglePreventClickNeed');

    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    expect(instance.togglePreventClickNeed).toHaveBeenCalledTimes(0);
    instance.handleClickCapture(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    expect(instance.togglePreventClickNeed).toHaveBeenCalledTimes(0);
  });

  it('getClientDelta()', () => {
    const instance = new Draggable({});

    const event = new MouseEvent('test', { clientX: 123, clientY: 456 });
    expect(instance.getClientDelta(event)).toEqual({
      dx: -123,
      dy: -456,
    });
  });

  it('toggleGrabbed()', () => {
    const instance = new Draggable({});

    expect(instance.isGrabbed).toBe(false);
    instance.toggleGrabbed(true);
    expect(instance.isGrabbed).toBe(true);
  });

  it('toggleTransition()', () => {
    const instance = new Draggable({ transitionDuration: 250 });

    const element = document.createElement('div');
    instance.draggableRef = { current: element };
    instance.hasTransition = false;

    expect(element.style.transition).toBe('');
    instance.toggleTransition(true);
    expect(instance.hasTransition).toBe(true);
    expect(element.style.transition).toBe(getTransitionStyle(250, 'transform'));
  });

  it('toggleTransition() should disable transition', () => {
    const instance = new Draggable({ transitionDuration: 250 });

    const element = document.createElement('div');
    instance.draggableRef = { current: element };
    instance.hasTransition = true;
    element.style.transition = getTransitionStyle(250, 'transform');

    instance.toggleTransition(false);
    expect(instance.hasTransition).toBe(false);
    expect(element.style.transition).toBe('');
  });

  it('toggleTransition() should do nothing when draggableRef is empty', () => {
    const instance = new Draggable({ transitionDuration: 250 });

    instance.draggableRef = { current: null };
    instance.hasTransition = false;

    instance.toggleTransition(true);
    expect(instance.hasTransition).toBe(false);
  });

  it('toggleTransition() should do nothing when hasTransition equals of argument', () => {
    const instance = new Draggable({ transitionDuration: undefined });

    const element = document.createElement('div');
    instance.draggableRef = { current: element };
    instance.hasTransition = false;

    expect(element.style.transition).toBe('');
    instance.toggleTransition(false);
    expect(element.style.transition).toBe('');
    expect(instance.hasTransition).toBe(false);
  });

  it('isTransitionEnabled()', () => {
    const instance = new Draggable({});

    instance.hasTransition = true;
    expect(instance.isTransitionEnabled()).toBe(true);
    instance.hasTransition = false;
    expect(instance.isTransitionEnabled()).toBe(false);
  });

  it('render() should handle undefined props', () => {
    const instance = new Draggable({ containerProps: undefined, transitionDuration: undefined });
    instance.hasTransition = true;

    const { container } = render(<>{instance.render()}</>);

    expect(container.querySelector<HTMLDivElement>('.draggable')?.style.transition).toBe(
      getTransitionStyle(320, 'transform'),
    );
  });
});

import { mount } from 'enzyme';
import React from 'react';
import { CustomScrollbar, HandleFullScroll } from '..';

describe('CustomScrollbar', () => {
  it('should handle onFullScroll/fullScrollThreshold', () => {
    const spy = jest.fn();

    const wrapper = mount(<CustomScrollbar onFullScroll={spy} fullScrollThreshold={120} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('HandleFullScroll', () => {
  it('should handle event', () => {
    const spy = jest.fn();
    const handler = HandleFullScroll(spy, 10);

    expect(spy).toHaveBeenCalledTimes(0);

    handler({
      target: {
        __proto__: Element.prototype,
        clientHeight: 100,
        scrollTop: 0,
        scrollHeight: 1000,
      },
    } as any);

    expect(spy).toHaveBeenCalledTimes(0);

    handler({
      target: {
        __proto__: Element.prototype,
        clientHeight: 100,
        scrollTop: 900,
        scrollHeight: 1000,
      },
    } as any);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle undefined', () => {
    const spy = jest.fn();
    const handler = HandleFullScroll(spy);

    expect(spy).toHaveBeenCalledTimes(0);

    handler(undefined);

    expect(spy).toHaveBeenCalledTimes(0);
  });
});

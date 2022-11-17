import React, { useRef } from 'react';
import { mount } from 'enzyme';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';
import { useBodyScrollLock, WithBodyScrollLock, allowTouchMove } from '../body-scroll';
import { BSL_IGNORE_ATTR } from '../../constants';

jest.mock('body-scroll-lock', () => {
  const original = jest.requireActual('body-scroll-lock');

  return {
    ...original,
    __esModule: true,
    enableBodyScroll: jest.fn(original.enableBodyScroll),
    disableBodyScroll: jest.fn(original.disableBodyScroll),
  };
});

describe('useBodyScrollLock', () => {
  const TestComponent = ({ withScrollDisable }: WithBodyScrollLock) => {
    const ref = useRef<HTMLDivElement>(null);

    useBodyScrollLock(ref, withScrollDisable);

    return <div ref={ref}>Test component</div>;
  };

  it('should handle "withScrollDisable" and "scrollDisableOptions" options', () => {
    const wrapper = mount(<TestComponent withScrollDisable scrollDisableOptions={{}} />);

    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(enableBodyScroll).toHaveBeenCalledTimes(0);

    wrapper.unmount();

    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(enableBodyScroll).toHaveBeenCalledTimes(1);
  });

  it('should do nothing when "withScrollDisable" is falsy', () => {
    const wrapper = mount(<TestComponent withScrollDisable={false} scrollDisableOptions={{}} />);

    expect(disableBodyScroll).toHaveBeenCalledTimes(0);
    expect(enableBodyScroll).toHaveBeenCalledTimes(0);

    wrapper.unmount();

    expect(disableBodyScroll).toHaveBeenCalledTimes(0);
    expect(enableBodyScroll).toHaveBeenCalledTimes(0);
  });
});

describe('allowTouchMove', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('should works with marked element', () => {
    container.innerHTML = `
      <div ${BSL_IGNORE_ATTR}="true">
        <div id="test-target">Target</div>
      </div>
    `;

    document.body.append(container);

    const target = document.body.querySelector('#test-target') as any;

    expect(allowTouchMove(target)).toBe(true);
  });

  it('should works without marked element', () => {
    container.innerHTML = `
      <div>
        <div id="test-target">Target</div>
      </div>
    `;

    const target = document.body.querySelector('#test-target') as any;

    expect(allowTouchMove(target)).toBe(false);
  });
});

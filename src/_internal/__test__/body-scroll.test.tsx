import React, { useRef } from 'react';
import { mount } from 'enzyme';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';
import { useBodyScrollLock, WithBodyScrollLock } from '../body-scroll';

jest.mock('body-scroll-lock', () => {
  const original = jest.requireActual('body-scroll-lock');

  return {
    ...original,
    __esModule: true,
    enableBodyScroll: jest.fn(original.enableBodyScroll),
    disableBodyScroll: jest.fn(original.disableBodyScroll),
  };
});

describe('useScrollDisable', () => {
  const TestComponent = ({ withScrollDisable }: WithBodyScrollLock) => {
    const ref = useRef<HTMLDivElement>(null);

    useBodyScrollLock(ref, withScrollDisable);

    return (
      <div ref={ref}>Test component</div>
    );
  };

  it('should handle "withScrollDisable" and "scrollDisableOptions" options', () => {
    const wrapper = mount(
      <TestComponent
        withScrollDisable
        scrollDisableOptions={{}}
      />
    );

    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(enableBodyScroll).toHaveBeenCalledTimes(0);

    wrapper.unmount();

    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(enableBodyScroll).toHaveBeenCalledTimes(1);
  });
});

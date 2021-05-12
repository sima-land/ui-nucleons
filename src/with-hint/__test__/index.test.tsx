import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { WithHint, useTempHint } from '..';
import { Hint } from '../../hint';

describe('<WithHint />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <WithHint hint='Hello, world'>
        {(ref, toggle) => (
          <div
            ref={ref as any}
            data-testid='test-opener'
            onMouseEnter={() => toggle(true)}
            onMouseLeave={() => toggle(false)}
          >Opener</div>
        )}
      </WithHint>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Hint)).toHaveLength(0);

    act(() => {
      wrapper.find('[data-testid="test-opener"]').simulate('mouseenter');
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Hint)).toHaveLength(1);

    act(() => {
      wrapper.find('[data-testid="test-opener"]').simulate('mouseleave');
    });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Hint)).toHaveLength(0);
  });

  it('should handle scroll', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <WithHint hint='Hello, world' onClose={spy}>
        {(ref, toggle) => (
          <div
            ref={ref as any}
            data-testid='test-opener'
            onMouseEnter={() => toggle(true)}
            onMouseLeave={() => toggle(false)}
          >Opener</div>
        )}
      </WithHint>
    );

    expect(wrapper.find('[data-testid="hint"]')).toHaveLength(0);

    // show
    act(() => {
      wrapper.find('[data-testid="test-opener"]').simulate('mouseenter');
    });
    wrapper.update();

    expect(wrapper.find('[data-testid="hint"]')).toHaveLength(1);

    expect(spy).toBeCalledTimes(0);

    // scroll
    act(() => {
      document.dispatchEvent(new Event('scroll'));
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);
  });

  it('should handle scroll of non body parent', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <WithHint hint='Hello, world' onClose={spy}>
        {(ref, toggle) => (
          <div
            ref={ref as any}
            data-testid='test-opener'
            onMouseEnter={() => toggle(true)}
            onMouseLeave={() => toggle(false)}
          >Opener</div>
        )}
      </WithHint>
    );

    expect(wrapper.find('[data-testid="hint"]')).toHaveLength(0);

    // show
    act(() => {
      wrapper.find('[data-testid="test-opener"]').simulate('mouseenter');
    });
    wrapper.update();

    expect(wrapper.find('[data-testid="hint"]')).toHaveLength(1);

    expect(spy).toBeCalledTimes(0);

    // scroll
    act(() => {
      document.dispatchEvent(new Event('scroll'));
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);
  });
});

describe('useTempHint', () => {
  const TestComponent = () => {
    const [bind, toggle] = useTempHint();

    return (
      <>
        <div data-testid='test-opener' onClick={() => toggle(true)}>
          {bind.shown ? 'shown' : 'hidden'}
        </div>
        <div onClick={bind.onClose} data-testid='closer' />
      </>
    );
  };

  jest.useFakeTimers();

  it('should works', () => {
    const wrapper = mount(
      <TestComponent />
    );

    expect(wrapper.text()).toBe('hidden');

    act(() => {
      wrapper.find('[data-testid="test-opener"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.text()).toBe('shown');

    act(() => {
      jest.advanceTimersByTime(2500);
    });
    wrapper.update();

    expect(wrapper.text()).toBe('hidden');
  });

  it('should recreate timer', () => {
    const wrapper = mount(
      <TestComponent />
    );

    expect(wrapper.text()).toBe('hidden');

    // try show
    act(() => {
      wrapper.find('[data-testid="test-opener"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.text()).toBe('shown');

    // wait
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    wrapper.update();

    expect(wrapper.text()).toBe('shown');

    // try show again
    act(() => {
      wrapper.find('[data-testid="test-opener"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.text()).toBe('shown');

    // wait for first timer
    act(() => {
      jest.advanceTimersByTime(600);
    });
    wrapper.update();

    expect(wrapper.text()).toBe('shown');

    // wait
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    wrapper.update();

    expect(wrapper.text()).toBe('hidden');
  });

  it('should provide "onClose" prop', () => {
    const wrapper = mount(
      <TestComponent />
    );

    expect(wrapper.text()).toBe('hidden');

    // try show
    act(() => {
      wrapper.find('[data-testid="test-opener"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.text()).toBe('shown');

    // call onClose
    act(() => {
      wrapper.find('[data-testid="closer"]').simulate('click');
    });
    wrapper.update();

    expect(wrapper.text()).toBe('hidden');
  });
});

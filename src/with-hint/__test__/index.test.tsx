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
});

describe('useTempHint', () => {
  const TestComponent = () => {
    const [shown, toggle] = useTempHint();

    return (
      <div data-testid='test-opener' onClick={() => toggle(true)}>
        {shown ? 'shown' : 'hidden'}
      </div>
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
      jest.advanceTimersByTime(500);
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
      jest.advanceTimersByTime(1300);
    });
    wrapper.update();

    expect(wrapper.text()).toBe('shown');

    // wait
    act(() => {
      jest.advanceTimersByTime(2200);
    });
    wrapper.update();

    expect(wrapper.text()).toBe('hidden');
  });
});

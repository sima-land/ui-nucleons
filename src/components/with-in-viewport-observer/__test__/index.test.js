import React from 'react';
import { mount } from 'enzyme';
import withInViewportObserver from '../';

describe('withInViewportObserver', () => {
  /**
   * Обычный компонент для тестирования компонента высшего порядка.
   * @return {ReactElement} Компонент.
   */
  const TestSpan = () => <span>Тестовый компонент</span>;

  it('should create component with correct name', () => {
    const TestComponent = withInViewportObserver(TestSpan);
    expect(TestComponent.displayName).toBe('withInViewportObserver(TestSpan)');
  });
  it('should translate addObserve to component', () => {
    const TestComponent = withInViewportObserver(TestSpan);
    const wrapper = mount(
      <TestComponent />
    );
    expect(wrapper.find(TestSpan).prop('addObserve')).toBeInstanceOf(Function);
  });
});

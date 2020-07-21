import React from 'react';
import { mount } from 'enzyme';
import withInViewportObserver from '../';
import initAddObserve from '../../helpers/intersection-observer';

jest.mock('../../helpers/intersection-observer', () => {
  const original = jest.requireActual('../../helpers/intersection-observer');
  return {
    ...original,
    __esModule: true,
    default: jest.fn(original.default),
  };
});

describe('withInViewportObserver', () => {
  const TestSpan = () => <span>Тестовый компонент</span>;

  it('shouldn`t create excess observers instances', () => {
    expect(initAddObserve).toBeCalledTimes(0);

    withInViewportObserver(TestSpan);
    expect(initAddObserve).toBeCalledTimes(1);
    expect(initAddObserve).toHaveBeenLastCalledWith({});

    withInViewportObserver(TestSpan);
    expect(initAddObserve).toBeCalledTimes(1);

    const options = { rootMargin: '100px 0px 0px 0px' };
    withInViewportObserver(TestSpan, options);
    expect(initAddObserve).toBeCalledTimes(2);
    expect(initAddObserve).toHaveBeenLastCalledWith(options);

    withInViewportObserver(TestSpan, options);
    expect(initAddObserve).toBeCalledTimes(2);
  });

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

  it('should pass props with correct name', () => {
    const TestComponent = withInViewportObserver(
      TestSpan,
      {},
      'testPropName'
    );

    const wrapper = mount(
      <TestComponent />
    );

    expect(wrapper.find(TestSpan).prop('testPropName')).toBeInstanceOf(Function);
  });
});

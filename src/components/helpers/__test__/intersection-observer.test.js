import { mount } from 'enzyme';
import initAddObserve,
{
  addObserve,
  observerHandle,
  wrapAddObserve,
  wrapObserverHandle,
} from '../intersection-observer';
import React from 'react';
import isFunction from 'lodash/isFunction';
import { makeInViewportObserverHOC } from '../../with-in-viewport-observer';
import PropTypes from 'prop-types';

class TestProductPreviewsWidget extends React.Component {
  widgetRef = React.createRef();

  componentDidMount () {
    isFunction(this.props.addObserve)
    && this.props.addObserve(this.widgetRef.current, this.props.onIntersection);
  }

  render () {
    return (
      <div ref={this.widgetRef}>content</div>
    );
  }
}

TestProductPreviewsWidget.propTypes = {
  addObserve: PropTypes.func,
  onIntersection: PropTypes.func,
};

describe('observerHandle()', () => {
  const spy = jest.fn();
  const observerContainer = { registry: new Map() };
  for (let i = 0; i < 10; i++) {
    observerContainer.registry.set({ a: i }, spy);
  }

  it('should run and callback all times', () => {
    const testEntries = [];
    for (const entry of observerContainer.registry.keys()) {
      testEntries.push({
        target: entry,
        isIntersecting: true,
      });
    }
    observerHandle(observerContainer, testEntries);
    expect(spy).toBeCalledTimes(observerContainer.registry.size);
  });
});

describe('addObserve()', () => {
  const spy = jest.fn();
  const spy2 = jest.fn();
  const testEl = document.createElement('div');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should run', () => {
    const observerContainer = {
      observer: {
        observe: spy2,
      },
      registry: new Map(),
    };
    const mockSet = jest.spyOn(Map.prototype, 'set');
    const mockObserve = jest.spyOn(observerContainer.observer, 'observe');

    addObserve(observerContainer, testEl, spy);
    expect(mockSet).toBeCalledTimes(1);
    expect(mockObserve).toBeCalledTimes(1);
    expect(spy2.mock.calls[0][0]).toBe(testEl);
  });
  it('should not run', () => {
    const mockSet = jest.spyOn(Map.prototype, 'set');
    addObserve({}, testEl, spy);
    expect(mockSet).toBeCalledTimes(0);
  });
});

describe('wrapAddObserve()', () => {
  it ('run addObserve when component subscribe on IntersectionObserver ', () => {
    const add = jest.fn();
    const observersList = [
      {
        add,
        options: {},
      },
    ];
    const hoc = makeInViewportObserverHOC(observersList);
    const TestComponent = hoc(TestProductPreviewsWidget);
    mount(<TestComponent />);
    expect(add).toBeCalledTimes(1);
  });

  it ('run addObserve into wrapAddObserve', () => {
    const addObserver = jest.fn();
    const observerContainer = {
      observer: {},
      registry: new Map(),
    };
    wrapAddObserve(observerContainer, addObserver)();
    expect(addObserver).toBeCalledTimes(1);
  });
});

describe('wrapObserverHandle()', () => {
  it ('test', () => {
    const observerHandler = jest.fn();
    const addObserver = initAddObserve(observerHandler);
    wrapObserverHandle(addObserver, observerHandler)();
    expect(observerHandler).toBeCalledTimes(1);
  });
});

describe('initAddObserve', () => {
  const spy = jest.spyOn(window, 'IntersectionObserver').mockImplementation(jest.fn());

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it ('run addObserve when window is defined', () => {
    initAddObserve();
    expect(spy).toBeCalledTimes(1);
  });

  it ('run addObserve when window is undefined', () => {
    jest.spyOn(global, 'window', 'get').mockImplementation(() => undefined);
    initAddObserve();
    expect(window).toBeUndefined();
    expect(spy).toBeCalledTimes(0);
  });
});

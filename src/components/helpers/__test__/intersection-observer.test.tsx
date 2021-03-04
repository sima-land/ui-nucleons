import { mount } from 'enzyme';
import initAddObserve,
{
  addObserve,
  observerHandle,
  wrapAddObserve,
  wrapObserverHandle,
  Callback,
} from '../intersection-observer';
import React from 'react';
import isFunction from 'lodash/isFunction';
import { makeInViewportObserverHOC } from '../../with-in-viewport-observer';

type Props = {
  addObserve: (el: Element, c: Callback) => void
  onIntersection: Callback
}

class TestProductPreviewsWidget extends React.Component<Props> {
  widgetRef = React.createRef();

  componentDidMount () {
    isFunction(this.props.addObserve)
    && this.props.addObserve(this.widgetRef.current, this.props.onIntersection);
  }

  render () {
    return (
      <div ref={this.widgetRef as React.LegacyRef<HTMLDivElement>}>content</div>
    );
  }
}

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
    observerHandle(observerContainer as any, testEntries as any);
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

    addObserve(observerContainer as any, testEl, spy);
    expect(mockSet).toBeCalledTimes(1);
    expect(mockObserve).toBeCalledTimes(1);
    expect(spy2.mock.calls[0][0]).toBe(testEl);
  });
  it('should not run', () => {
    const mockSet = jest.spyOn(Map.prototype, 'set');
    addObserve({} as any, testEl, spy);
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
    const hoc = makeInViewportObserverHOC(observersList as any);
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
    (wrapAddObserve(observerContainer as any, addObserver as any) as any)();
    expect(addObserver).toBeCalledTimes(1);
  });
});

describe('wrapObserverHandle()', () => {
  it ('test', () => {
    const observerHandler = jest.fn();
    const addObserver = initAddObserve(observerHandler);
    (wrapObserverHandle(addObserver as any, observerHandler as any) as any)();
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
    jest.spyOn(global as typeof global & { window: any }, 'window', 'get').mockImplementation(() => undefined);
    initAddObserve();
    expect(window).toBeUndefined();
    expect(spy).toBeCalledTimes(0);
  });
});

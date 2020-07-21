import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import {
  useOnMount,
  useApplyMemo,
  useIsTouchDevice,
  useInfiniteScroll,
  useOutsideClick,
} from '../index';

jest.mock('../../helpers/is-touch-device', () => {
  const original = jest.requireActual('../../helpers/is-touch-device');
  return {
    ...original,
    __esModule: true,
    isTouchDevice: jest.fn(() => true),
  };
});

describe('useInfiniteScroll()', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  const TestComponent = ({ withList = true, onFullScroll }) => {
    const listRef = useRef();

    useInfiniteScroll(listRef, {
      onFullScroll,
    });

    return withList && (
      <ul className='test-list' ref={listRef}>
        Test list
      </ul>
    );
  };

  it('should works properly', () => {
    const spy = jest.fn();

    act(() => {
      render(<TestComponent onFullScroll={spy} />, container);
    });

    const listEl = container.querySelector('.test-list');
    expect(spy).toHaveBeenCalledTimes(0);

    // with full scroll
    Object.defineProperty(listEl, 'scrollTop', { value: 200, configurable: true });
    Object.defineProperty(listEl, 'clientHeight', { value: 100, configurable: true });
    Object.defineProperty(listEl, 'scrollHeight', { value: 100, configurable: true });
    listEl.dispatchEvent(new Event('scroll'));
    expect(spy).toHaveBeenCalledTimes(1);

    // with not full scroll
    Object.defineProperty(listEl, 'scrollTop', { value: 200, configurable: true });
    Object.defineProperty(listEl, 'clientHeight', { value: 100, configurable: true });
    Object.defineProperty(listEl, 'scrollHeight', { value: 400, configurable: true });
    listEl.dispatchEvent(new Event('scroll'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should works without ref.current', () => {
    jest.spyOn(HTMLUListElement.prototype, 'addEventListener');
    HTMLUListElement.prototype.addEventListener.mockClear();

    act(() => {
      render(<TestComponent withList={false} />, container);
    });
    expect(HTMLUListElement.prototype.addEventListener).toHaveBeenCalledTimes(0);
  });

  it('should works with ref.current', () => {
    jest.spyOn(HTMLUListElement.prototype, 'addEventListener');
    HTMLUListElement.prototype.addEventListener.mockClear();

    act(() => {
      render(<TestComponent withList />, container);
    });
    expect(HTMLUListElement.prototype.addEventListener).toHaveBeenCalledTimes(1);
  });

  it('should unsubscribe on unmount', () => {
    const wrapper = mount(
      <TestComponent />
    );

    let listElement;

    act(() => {
      listElement = wrapper.find('.test-list').getDOMNode();
      jest.spyOn(listElement, 'removeEventListener');
    });

    wrapper.unmount();

    expect(listElement.removeEventListener).toHaveBeenCalledTimes(1);
  });
});

describe('useOnMount()', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should call effect only on mount', () => {
    const spy = jest.fn();

    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false);
      useOnMount(spy);
      return (
        <div>
          Test
          <button id='test-open-button' onClick={() => setIsOpen(true)}></button>
          {isOpen && (
            <span>Opened</span>
          )}
        </div>
      );
    };
    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      render(<TestComponent />, container);
    });
    expect(spy).toHaveBeenCalledTimes(1);

    act(() => {
      document.querySelector('#test-open-button').click();
    });
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('useApplyMemo()', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should call function with dependencies', () => {
    const spy = jest.fn();

    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false);
      useApplyMemo(spy, [isOpen]);
      return (
        <div>
          Test
          <button id='test-open-button' onClick={() => setIsOpen(true)}></button>
          {isOpen && (
            <span>Opened</span>
          )}
        </div>
      );
    };
    act(() => {
      render(<TestComponent />, container);
    });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith([false]);

    act(() => {
      document.querySelector('#test-open-button').click();
    });
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith([true]);
  });
});

describe('useIsTouchDevice', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  const TestComponent = () => {
    const touch = useIsTouchDevice();
    return (
      touch && (
        <span>Visible on touch</span>
      )
    );
  };

  it('should works with touch', () => {
    act(() => {
      render(<TestComponent />, container);
    });
    expect(container.querySelector('span').textContent).toBe('Visible on touch');
  });
});

describe('useOutsideClick', () => {
  const TestComponent = ({ callback }) => {
    const ref = useRef();

    useOutsideClick(ref, callback);

    return (
      <div ref={ref} />
    );
  };

  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should works', () => {
    const spy = jest.fn();

    act(() => {
      render(<TestComponent callback={spy} />, container);
    });

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('click'));
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

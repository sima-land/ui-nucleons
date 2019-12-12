import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import {
  useOnMount,
  useApplyMemo,
} from '../index';

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

    /**
     * Тестовый компонент.
     * @return {ReactElement} Блок.
     */
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
      ReactDOM.render(<TestComponent />, container);
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

    /**
     * Тестовый компонент.
     * @return {ReactElement} Блок.
     */
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
      ReactDOM.render(<TestComponent />, container);
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

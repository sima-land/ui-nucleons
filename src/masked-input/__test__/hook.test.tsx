import React, { useEffect } from 'react';
import { createEvent, fireEvent, render } from '@testing-library/react';
import { useInputMask } from '../hook';
import { UseInputMaskOptions, UseInputMaskResult } from '../types';

describe('useInputMask', () => {
  it('should not throw when input ref is empty', () => {
    function WrongUsage({ value, defaultValue }: { value?: string; defaultValue?: string }) {
      const { bind } = useInputMask({
        value,
        defaultValue,
        maskOptions: {
          mask: '****',
          pattern: '\\d',
          placeholder: '*',
        },
      });

      return (
        <div>
          <p>There is an input without ref</p>
          <input type='text' data-testid='test-input' onChange={bind.onChange} />
        </div>
      );
    }

    const { rerender, getByTestId } = render(<WrongUsage value='111' />);

    expect(() => {
      rerender(<WrongUsage value='222' />);
    }).not.toThrow();

    expect(() => {
      fireEvent.change(getByTestId('test-input'), { target: { value: '444' } });
    }).not.toThrow();
  });

  it('should handle document "selectionchange" properly', () => {
    const spy = jest.fn();

    function TestComponent({ value, defaultValue }: { value?: string; defaultValue?: string }) {
      const { store, bind } = useInputMask({
        value,
        defaultValue,
        maskOptions: {
          mask: '___',
          pattern: '\\d',
          placeholder: '_',
        },
      });

      useEffect(() => store.subscribe(spy), [store]);

      return <input data-testid='test-input' {...bind} />;
    }

    const { getByTestId } = render(<TestComponent defaultValue='8080' />);

    expect(spy).toBeCalledTimes(0);
    fireEvent(document, new Event('selectionchange'));
    expect(spy).toBeCalledTimes(0);
    getByTestId('test-input').focus();
    expect(spy).toBeCalledTimes(0);
    expect(document.activeElement).toBe(getByTestId('test-input'));
    fireEvent(document, createEvent('selectionchange', document));
    expect(spy).toBeCalledTimes(1);
  });

  it('should return suitable result for options immediately (without rerender)', () => {
    const spy = jest.fn((result: UseInputMaskResult) => result);

    function TestComponent(props: UseInputMaskOptions) {
      const { store, bind } = useInputMask(props);

      spy({ store, bind });

      return <input data-testid='test-input' {...bind} />;
    }

    expect(spy).toBeCalledTimes(0);

    const { rerender } = render(
      <TestComponent
        value='1111'
        maskOptions={{
          mask: '____',
          pattern: '\\d',
          placeholder: '_',
        }}
      />,
    );
    expect(spy).toBeCalledTimes(1);
    expect(spy.mock.calls[0][0].bind.value).toBe('1111');

    rerender(
      <TestComponent
        value='2222'
        maskOptions={{
          mask: '+998-__-___-____',
          pattern: '\\d',
          placeholder: '_',
        }}
      />,
    );
    expect(spy).toBeCalledTimes(2);
    expect(spy.mock.calls[1][0].bind.value).toBe('+998-22-22');

    rerender(
      <TestComponent
        value='3333'
        maskOptions={{
          mask: '+998-__-___-____',
          pattern: '\\d',
          placeholder: '_',
        }}
      />,
    );
    expect(spy).toBeCalledTimes(4);
    expect(spy.mock.calls[2][0].bind.value).toBe('+998-22-22');
    expect(spy.mock.calls[3][0].bind.value).toBe('+998-33-33');
  });
});

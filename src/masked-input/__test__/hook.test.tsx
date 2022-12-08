import React, { useEffect } from 'react';
import { createEvent, fireEvent, render } from '@testing-library/react';
import { useInputMask } from '../hook';

describe('useInputMask', () => {
  it('should not throw when input ref is empty', () => {
    function WrongUsage({ value, defaultValue }: { value?: string; defaultValue?: string }) {
      useInputMask({
        value,
        defaultValue,
        maskOptions: {
          mask: '****',
          pattern: '\\d',
          placeholder: '*',
        },
      });

      return <div>There is no input</div>;
    }

    const { rerender } = render(<WrongUsage value='111' />);

    expect(() => rerender(<WrongUsage value='222' />)).not.toThrow();
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
});

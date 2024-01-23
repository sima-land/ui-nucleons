import { it, expect, describe, jest } from '@jest/globals';
import { useEffect } from 'react';
import { createEvent, fireEvent, render } from '@testing-library/react';
import { useInputMask } from '../use-input-mask';
import { UseInputMaskOptions, UseInputMaskResult } from '../types';
import userEvent from '@testing-library/user-event';

describe('useInputMask', () => {
  it('should not throw when input ref is empty', () => {
    const WrongUsage = ({ value }: { value: string; defaultValue?: string }) => {
      const { bind } = useInputMask({
        value,
        maskOptions: {
          mask: '****',
          pattern: '\\d',
          placeholder: '*',
        },
      });

      return (
        <div>
          <p>There is an input without ref</p>
          <input type='text' data-testid='test-input' {...bind} ref={undefined} />
        </div>
      );
    };

    const { rerender, getByTestId } = render(<WrongUsage value='111' />);

    expect(() => {
      rerender(<WrongUsage value='222' />);
    }).not.toThrow();

    expect(() => {
      userEvent.type(getByTestId('test-input'), '444');
    }).not.toThrow();
  });

  it('should handle document "selectionchange" properly', () => {
    const spy = jest.fn();

    const TestComponent = ({ value }: { value: string }) => {
      const { store, bind } = useInputMask({
        value,
        maskOptions: {
          mask: '___',
          pattern: '\\d',
          placeholder: '_',
        },
      });

      useEffect(() => store.subscribe(spy), [store]);

      return <input data-testid='test-input' {...bind} />;
    };

    const { getByTestId } = render(<TestComponent value='8080' />);

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent(document, new Event('selectionchange'));
    expect(spy).toHaveBeenCalledTimes(0);
    getByTestId('test-input').focus();
    expect(spy).toHaveBeenCalledTimes(0);
    expect(document.activeElement).toBe(getByTestId('test-input'));
    fireEvent(document, createEvent('selectionchange', document));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should return suitable result for options immediately (without rerender)', () => {
    const spy = jest.fn((result: UseInputMaskResult) => result);

    function TestComponent(props: UseInputMaskOptions) {
      const { store, bind } = useInputMask(props);

      spy({ store, bind });

      return <input data-testid='test-input' {...bind} />;
    }

    expect(spy).toHaveBeenCalledTimes(0);

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
    expect(spy).toHaveBeenCalledTimes(1);
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
    expect(spy).toHaveBeenCalledTimes(2);
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
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy.mock.calls[2][0].bind.value).toBe('+998-33-33');
  });
});

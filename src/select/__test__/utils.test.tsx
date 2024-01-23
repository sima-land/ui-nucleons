import { it, expect, describe, jest } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { useContext } from 'react';
import { SelectOpenerBinding } from '../types';
import { SelectContext } from '../utils';

describe('SelectContext', () => {
  it('should contain defaults', () => {
    const spy = jest.fn((bind: SelectOpenerBinding) => bind);

    function TestComponent() {
      const bind = useContext(SelectContext);

      spy(bind);

      return (
        <div data-testid='test-stub' onMouseDown={bind.onMouseDown} onKeyDown={bind.onKeyDown}>
          Hello
        </div>
      );
    }

    const { getByTestId } = render(<TestComponent />);

    // check defaults
    expect(spy).toHaveBeenCalledTimes(1);
    expect(typeof spy.mock.calls[0][0].onKeyDown === 'function').toBe(true);
    expect(typeof spy.mock.calls[0][0].onMouseDown === 'function').toBe(true);

    // call default callbacks
    expect(() => {
      fireEvent.mouseDown(getByTestId('test-stub'));
      fireEvent.keyDown(getByTestId('test-stub'));
    }).not.toThrow();
  });
});

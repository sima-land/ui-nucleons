import { fireEvent, render } from '@testing-library/react';
import React, { useContext } from 'react';
import { SelectContext } from '../utils';

describe('SelectContext', () => {
  it('should provide defaults', () => {
    function TestComponent() {
      const { setDropdownProps } = useContext(SelectContext);

      return (
        <div data-testid='test-component' onClick={() => setDropdownProps({ id: 'some-id' })}>
          Hello
        </div>
      );
    }

    const { getByTestId } = render(<TestComponent />);

    expect(() => {
      fireEvent.click(getByTestId('test-component'));
    }).not.toThrow();
  });
});

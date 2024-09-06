import { render } from '@testing-library/react';
import { useContext } from 'react';
import { SelectContextValue } from '../types';
import { SelectContext, SELECT_CONTEXT_DEFAULT_VALUE } from '../utils';

describe('SelectContext', () => {
  it('should contain defaults', () => {
    let contextValue: SelectContextValue | null = null;

    function TestComponent() {
      const bind = useContext(SelectContext);

      contextValue = bind;

      return <div>Hello</div>;
    }

    render(<TestComponent />);

    expect(contextValue === SELECT_CONTEXT_DEFAULT_VALUE).toBe(true);
  });

  it('default value should provide stub functions', () => {
    expect(() => {
      SELECT_CONTEXT_DEFAULT_VALUE.setCurrentValue('');
      SELECT_CONTEXT_DEFAULT_VALUE.setMenuOpen(false);
      SELECT_CONTEXT_DEFAULT_VALUE.setOpenerElement(null);
      SELECT_CONTEXT_DEFAULT_VALUE.setAnchorElement(null);
      SELECT_CONTEXT_DEFAULT_VALUE.setMenuElement(null);
    }).not.toThrow();
  });
});

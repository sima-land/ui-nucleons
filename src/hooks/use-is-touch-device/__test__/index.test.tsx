import { it, expect, describe } from '@jest/globals';
import { render } from '@testing-library/react';
import { useIsTouchDevice } from '..';

describe('useIsTouchDevice', () => {
  const TestComponent = () => {
    const touch = useIsTouchDevice();

    return <>{touch && <span>Visible on touch</span>}</>;
  };

  it('should works with touch', () => {
    // simulate touch device
    window.ontouchstart = undefined;

    const { container } = render(<TestComponent />);

    expect(container.querySelector('span')?.textContent).toBe('Visible on touch');
  });
});

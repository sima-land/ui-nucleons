import React from 'react';
import { render, fireEvent, createEvent } from '@testing-library/react';
import { useKeydown } from '../keydown';

describe('useKeydown', () => {
  const TestComponent = ({ spy }: { spy?: () => void }) => {
    useKeydown('Escape', spy);

    return <div />;
  };

  it('should works properly', () => {
    const spy = jest.fn();

    const { unmount } = render(<TestComponent spy={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.keyDown(document, { key: 'Enter' });
    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(spy).toHaveBeenCalledTimes(1);

    jest.spyOn(document, 'removeEventListener');
    unmount();
    expect(document.removeEventListener).toHaveBeenCalledTimes(1);
  });

  it('should not throw error if callback is not a function', () => {
    render(<TestComponent spy={undefined} />);

    expect(() => {
      fireEvent.keyDown(document, { key: 'Escape' });
    }).not.toThrowError();
  });

  it('callback arugment must be an event', () => {
    const spy = jest.fn();

    render(<TestComponent spy={spy} />);

    const event = createEvent.keyDown(document, { key: 'Escape' });

    expect(spy).toBeCalledTimes(0);
    fireEvent(document, event);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(event);
  });
});

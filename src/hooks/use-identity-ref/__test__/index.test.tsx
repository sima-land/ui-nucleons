import { it, expect, describe, jest } from '@jest/globals';
import { useEffect } from 'react';
import { render } from '@testing-library/react';
import { useIdentityRef } from '..';

describe('useIdentityRef', () => {
  const TestComponent = ({ value, callback }: { value: any; callback: (v: any) => void }) => {
    const ref = useIdentityRef(value);

    useEffect(() => {
      callback(ref.current);
    });

    return <>Test</>;
  };

  it('should works', () => {
    const spy = jest.fn();

    const { rerender } = render(<TestComponent value={123} callback={spy} />);

    expect(spy).toHaveBeenCalledWith(123);

    rerender(<TestComponent value={234} callback={spy} />);

    expect(spy).toHaveBeenCalledWith(234);
  });
});

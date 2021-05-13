import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { useIdentityRef } from '../identity';

describe('useIdentityRef', () => {
  const TestComponent = ({ value, callback }: {
    value: any,
    callback: (v: any) => void
  }) => {
    const ref = useIdentityRef(value);

    useEffect(() => {
      callback(ref.current);
    });

    return <>Test</>;
  };

  it('should works', () => {
    const container = document.createElement('div');
    const spy = jest.fn();

    document.body.append(container);

    act(() => {
      render(<TestComponent value={123} callback={spy} />, container);
    });

    expect(spy).toBeCalledWith(123);

    act(() => {
      render(<TestComponent value={234} callback={spy} />, container);
    });

    expect(spy).toBeCalledWith(234);
  });
});

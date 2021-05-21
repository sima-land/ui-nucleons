import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { useKeydown } from '../keydown';
import { mount } from 'enzyme';

describe('useKeydown', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  const TestComponent = ({ spy }: { spy?: () => void }) => {
    useKeydown('Escape', spy);

    return <div />;
  };

  const keyDown = (key: string) => new KeyboardEvent('keydown', { bubbles: true, key });

  it('should works properly', () => {
    const spy = jest.fn();

    act(() => {
      render(<TestComponent spy={spy} />, container);
    });

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      document.dispatchEvent(keyDown('Enter'));
    });
    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      document.dispatchEvent(keyDown('Escape'));
    });
    expect(spy).toHaveBeenCalledTimes(1);

    jest.spyOn(document, 'removeEventListener');
    const wrapper = mount(<TestComponent spy={spy} />);
    wrapper.unmount();
    expect(document.removeEventListener).toHaveBeenCalledTimes(1);
  });

  it('should not throw error if callback is not a func', () => {
    act(() => {
      render(<TestComponent spy={undefined} />, container);
    });

    expect(() => {
      act(() => {
        document.dispatchEvent(keyDown('Escape'));
      });
    }).not.toThrowError();
  });
});

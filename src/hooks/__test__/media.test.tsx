import { noop } from 'lodash';
import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { useMedia } from '../media';

describe('useMedia', () => {
  const TestComponent = () => {
    const matches = useMedia('(min-width: 320px)');

    return (
      <>{matches ? 'foo' : 'bar'}</>
    );
  };

  const matchMedia = window.matchMedia;

  const FakeMatchMedia = {
    callbacks: [],

    create (arg: any) {
      matchMedia(arg);

      return {
        matches: false,

        addEventListener: (eventName: string, callback: () => void) => {
          this.callbacks.push(callback as never);
        },

        removeEventListener: noop,
      };
    },

    dispatchChange ({ matches }: any) {
      this.callbacks.forEach(fn => {
        (fn as any)({ matches, __fake: true });
      });
    },
  };

  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container.remove();
  });

  beforeAll(() => {
    jest.spyOn(window, 'matchMedia').mockImplementation(q => FakeMatchMedia.create(q) as any);
  });

  afterAll(() => {
    (window.matchMedia as any).mockReset();
    (window.matchMedia as any).mockClear();
  });

  it('should handle change event', () => {
    act(() => {
      render(<TestComponent />, container);
    });
    expect(container.textContent).toContain('bar');

    act(() => {
      FakeMatchMedia.dispatchChange({ matches: true });
    });
    expect(container.textContent).toContain('foo');
  });
});

import { useRef } from 'react';
import { render } from 'react-dom';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { useIsTouchDevice, useInfiniteScroll, useOutsideClick } from '../index';

jest.mock('../../helpers/is-touch-device', () => {
  const original = jest.requireActual('../../helpers/is-touch-device');
  return {
    ...original,
    __esModule: true,
    isTouchDevice: jest.fn(() => true),
  };
});

describe('useInfiniteScroll()', () => {
  let container: HTMLDivElement | null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container && document.body.removeChild(container);
    container = null;
  });

  const TestComponent = ({
    withList = true,
    onFullScroll,
  }: {
    withList?: boolean;
    onFullScroll?: () => void;
  }) => {
    const listRef = useRef() as React.MutableRefObject<HTMLUListElement>;

    useInfiniteScroll(listRef, {
      onFullScroll,
    });

    return (
      <>
        {withList && (
          <ul className='test-list' ref={listRef}>
            Test list
          </ul>
        )}
      </>
    );
  };

  it('should works properly', () => {
    const spy = jest.fn();

    act(() => {
      render(<TestComponent onFullScroll={spy} />, container);
    });

    const listEl = (container as HTMLDivElement).querySelector('.test-list') as HTMLUListElement;
    expect(spy).toHaveBeenCalledTimes(0);

    // with full scroll
    Object.defineProperty(listEl, 'scrollTop', { value: 200, configurable: true });
    Object.defineProperty(listEl, 'clientHeight', { value: 100, configurable: true });
    Object.defineProperty(listEl, 'scrollHeight', { value: 100, configurable: true });
    listEl.dispatchEvent(new Event('scroll'));
    expect(spy).toHaveBeenCalledTimes(1);

    // with not full scroll
    Object.defineProperty(listEl, 'scrollTop', { value: 200, configurable: true });
    Object.defineProperty(listEl, 'clientHeight', { value: 100, configurable: true });
    Object.defineProperty(listEl, 'scrollHeight', { value: 400, configurable: true });
    listEl.dispatchEvent(new Event('scroll'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should works without ref.current', () => {
    jest.spyOn(HTMLUListElement.prototype, 'addEventListener');
    (HTMLUListElement.prototype.addEventListener as unknown as jest.Mock).mockClear();

    act(() => {
      render(<TestComponent withList={false} />, container);
    });
    expect(HTMLUListElement.prototype.addEventListener).toHaveBeenCalledTimes(0);
  });

  it('should works with ref.current', () => {
    jest.spyOn(HTMLUListElement.prototype, 'addEventListener');
    (HTMLUListElement.prototype.addEventListener as unknown as jest.Mock).mockClear();

    act(() => {
      render(<TestComponent withList />, container);
    });
    expect(HTMLUListElement.prototype.addEventListener).toHaveBeenCalledTimes(1);
  });

  it('should works withhout onFullScroll', () => {
    act(() => {
      render(<TestComponent withList />, container);
    });

    const listEl = (container as HTMLDivElement).querySelector('.test-list') as HTMLUListElement;

    expect(() => {
      listEl.dispatchEvent(new Event('scroll'));
    }).not.toThrow();
  });

  it('should unsubscribe on unmount', () => {
    const wrapper = mount(<TestComponent />);

    let listElement: HTMLUListElement | null = null;

    act(() => {
      listElement = wrapper.find('.test-list').getDOMNode() as HTMLUListElement;
      listElement && jest.spyOn(listElement, 'removeEventListener');
    });

    wrapper.unmount();

    expect((listElement as unknown as HTMLUListElement).removeEventListener).toHaveBeenCalledTimes(
      1,
    );
  });
});

describe('useIsTouchDevice', () => {
  let container: HTMLDivElement | null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container && document.body.removeChild(container);
    container = null;
  });

  const TestComponent = () => {
    const touch = useIsTouchDevice();

    return <>{touch && <span>Visible on touch</span>}</>;
  };

  it('should works with touch', () => {
    act(() => {
      render(<TestComponent />, container);
    });
    expect(
      ((container as HTMLDivElement).querySelector('span') as HTMLSpanElement).textContent,
    ).toBe('Visible on touch');
  });
});

describe('useOutsideClick', () => {
  const TestComponent = ({ callback }: { callback: () => void }) => {
    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, callback);

    return <div ref={ref} />;
  };

  let container: HTMLDivElement | null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container && document.body.removeChild(container);
    container = null;
  });

  it('should works', () => {
    const spy = jest.fn();

    act(() => {
      render(<TestComponent callback={spy} />, container);
    });

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('click'));
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle array of refs', () => {
    const spy = jest.fn();

    const OtherTestComponent = ({ callback }: { callback: () => void }) => {
      const refA = useRef<HTMLDivElement>(null);
      const refB = useRef<HTMLDivElement>(null);

      useOutsideClick([refA, refB], callback);

      return (
        <>
          <div ref={refA} />
          <div ref={refB} />
        </>
      );
    };

    act(() => {
      render(<OtherTestComponent callback={spy} />, container);
    });

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('click'));
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

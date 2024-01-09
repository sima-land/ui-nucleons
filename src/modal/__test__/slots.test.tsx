import { render } from '@testing-library/react';
import { ModalBody, ModalOverlap, ModalBottomGap } from '..';
import { createRef } from 'react';
import { PageScrollLockContext } from '../../_internal/page-scroll-lock';
import { PageScrollLockAdapter } from '../../_internal/page-scroll-lock/types';

describe('ModalBody', () => {
  it('should handle "children" prop', () => {
    const { rerender, container } = render(
      <ModalBody>
        <span>Some text here...</span>
      </ModalBody>,
    );
    expect(container.textContent).toBe('Some text here...');

    rerender(
      <ModalBody>
        <p>Updated text here!</p>
      </ModalBody>,
    );
    expect(container.textContent).toBe('Updated text here!');
  });

  it('should handle "rootRef" prop', () => {
    const ref = createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <ModalBody rootRef={ref}>
        <p>Hello!</p>
      </ModalBody>,
    );

    expect(getByTestId('modal-body') === ref.current).toBe(true);
  });

  it('should handle "viewportRef" and "viewportProps" props', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(
      <ModalBody viewportRef={ref} viewportProps={{ id: 'some-viewport' }}>
        <p>Hello!</p>
      </ModalBody>,
    );

    expect(container.querySelector('#some-viewport') instanceof HTMLDivElement).toBe(true);
    expect(container.querySelector('#some-viewport') === ref.current).toBe(true);
  });

  it('should handle "withScrollDisable" and "scrollDisableOptions" props', () => {
    const adapter: PageScrollLockAdapter = {
      lock: jest.fn(),
      unlock: jest.fn(),
    };
    const spy = jest.fn<PageScrollLockAdapter, any[]>(() => adapter);
    const ref = createRef<HTMLDivElement>();

    expect(spy).toHaveBeenCalledTimes(0);

    render(
      <PageScrollLockContext.Provider value={{ adapter: spy }}>
        <ModalBody
          viewportRef={ref}
          withScrollDisable
          scrollDisableOptions={{ reserveScrollBarGap: true }}
        >
          <p>Hello!</p>
        </ModalBody>
      </PageScrollLockContext.Provider>,
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(ref.current instanceof HTMLDivElement).toBe(true);
    expect(spy.mock.calls[0][0] === ref.current).toBe(true);
    expect(spy.mock.calls[0][1]).toEqual({ reserveScrollBarGap: true });
  });

  it('ModalBody should NOT lock page scroll by default', () => {
    const adapter: PageScrollLockAdapter = {
      lock: jest.fn(),
      unlock: jest.fn(),
    };
    const spy = jest.fn<PageScrollLockAdapter, any[]>(() => adapter);

    expect(adapter.lock).toHaveBeenCalledTimes(0);

    render(
      <PageScrollLockContext.Provider value={{ adapter: spy }}>
        <ModalBody>Hello</ModalBody>
      </PageScrollLockContext.Provider>,
    );

    expect(adapter.lock).toHaveBeenCalledTimes(0);
  });
});

describe('ModalOverlap', () => {
  it('should handle "children" prop', () => {
    const { container } = render(
      <ModalOverlap>
        <button type='button'>Submit</button>
      </ModalOverlap>,
    );

    expect(container.textContent).toBe('Submit');
  });
});

describe('ModalBottomGap', () => {
  it('should handle "children" prop', () => {
    const { container } = render(<ModalBottomGap />);

    expect(container.querySelectorAll('.bottom-gap')).toHaveLength(1);
  });
});

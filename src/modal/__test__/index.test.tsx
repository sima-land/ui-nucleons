import React, { createRef, RefObject, useContext, useEffect } from 'react';
import { Modal, ModalSize } from '..';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import { render, fireEvent } from '@testing-library/react';
import { usePageScrollLock } from '../../_internal/page-scroll-lock';
import { LayerProvider, useLayer } from '../../helpers/layer';
import { ViewportContext } from '../../context/viewport';
import { ModalContext } from '../utils';

jest.mock('../../_internal/page-scroll-lock', () => {
  const original = jest.requireActual('../../_internal/page-scroll-lock');

  return {
    ...original,
    __esModule: true,
    usePageScrollLock: jest.fn(original.useBodyScrollLock),
  };
});

describe('Modal', () => {
  it('should render overlap content', () => {
    const { getByTestId } = render(
      <Modal>
        <Modal.Body>This is modal body</Modal.Body>
        <Modal.Overlap>Test is modal overlap content</Modal.Overlap>
      </Modal>,
    );

    expect(getByTestId('modal').querySelectorAll('[data-testid="modal:overlap"]')).toHaveLength(1);
    expect(getByTestId('modal:overlap').textContent).toBe('Test is modal overlap content');
  });

  it('should call onClose properly', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <Modal onClose={spy}>
        <Modal.Header title='Test title' onClose={spy} />
        <Modal.Body>Test modal content</Modal.Body>
      </Modal>,
    );

    // overlay mousedown but not mouseup
    fireEvent.mouseDown(getByTestId('modal-overlay'), { button: 0 });
    fireEvent.mouseUp(getByTestId('modal'), { button: 0 });
    expect(spy).toHaveBeenCalledTimes(0);

    // not primary mouse button
    fireEvent.mouseDown(getByTestId('modal-overlay'), { button: 1 });
    fireEvent.mouseUp(getByTestId('modal-overlay'), { button: 1 });
    expect(spy).toHaveBeenCalledTimes(0);

    // not overlay click
    fireEvent.mouseDown(getByTestId('modal'), { button: 0 });
    fireEvent.mouseUp(getByTestId('modal'), { button: 0 });
    expect(spy).toHaveBeenCalledTimes(0);

    // exactly overlay click
    fireEvent.mouseDown(getByTestId('modal-overlay'), { button: 0 });
    fireEvent.mouseUp(getByTestId('modal-overlay'), { button: 0 });
    expect(spy).toHaveBeenCalledTimes(1);

    // close button click
    fireEvent.click(getByTestId('top-bar:close'));
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should do NOT disable/enable body scrolling by default', () => {
    render(
      <Modal>
        <Modal.Body>Hello</Modal.Body>
      </Modal>,
    );

    expect((usePageScrollLock as jest.Mock).mock.calls[0][1].lockEnabled).toBe(false);
  });

  it('should render different sizes properly', () => {
    const SIZES: ReadonlyArray<ModalSize> = ['s', 'm', 'l', 'xl', 'fullscreen'];
    const { getByTestId, rerender } = render(<Modal />);

    for (const size of SIZES) {
      rerender(<Modal size={size} />);
      expect(getByTestId('modal').classList.contains(`size-${size}`)).toBe(true);
    }
  });

  it('should render TopBar with back button', () => {
    const spy = jest.fn();

    const { queryAllByTestId, getByTestId } = render(
      <Modal>
        <Modal.Header onBack={spy} />
      </Modal>,
    );

    expect(queryAllByTestId('top-bar')).toHaveLength(1);
    expect(spy).toBeCalledTimes(0);

    fireEvent.click(getByTestId('top-bar:back'));

    expect(spy).toBeCalledTimes(1);
  });

  it('should render TopBar with close button', () => {
    const spy = jest.fn();

    const { queryAllByTestId, getByTestId } = render(
      <Modal>
        <Modal.Header onClose={spy} />
      </Modal>,
    );

    expect(queryAllByTestId('top-bar')).toHaveLength(1);
    expect(spy).toBeCalledTimes(0);

    fireEvent.click(getByTestId('top-bar:close'));

    expect(spy).toBeCalledTimes(1);
  });

  it('should render close button and custom start button in TopBar', () => {
    const { getAllByTestId } = render(
      <Modal>
        <Modal.Header
          onClose={jest.fn()}
          buttons={{
            start: {
              icon: <ArrowLeftSVG data-testid='custom-top-bar-btn' />,
            },
          }}
        />
      </Modal>,
    );

    expect(getAllByTestId('top-bar:close')).toHaveLength(1);
    expect(getAllByTestId('custom-top-bar-btn')).toHaveLength(1);
  });

  it('should handle "height" prop', () => {
    const { getByTestId } = render(<Modal height={480} />);

    expect(getByTestId('modal').style.getPropertyValue('--modal-height')).toBe('480px');
  });

  it('should handle "data-testid" prop', () => {
    const { container } = render(
      <Modal data-testid='some-modal'>
        <Modal.Body>Main Content</Modal.Body>
      </Modal>,
    );

    expect(container.querySelectorAll('[data-testid="modal"]')).toHaveLength(0);
    expect(container.querySelectorAll('[data-testid="some-modal"]')).toHaveLength(1);
  });

  it('should increment layer of by 100', () => {
    function TestComponent() {
      const layer = useLayer();
      return <div data-testid='test-component' data-layer={layer} />;
    }

    const { getByTestId } = render(
      <LayerProvider value={20}>
        <Modal>
          <Modal.Body>
            <TestComponent />
          </Modal.Body>
        </Modal>
      </LayerProvider>,
    );

    expect(getByTestId('test-component').getAttribute('data-layer')).toBe('120');
  });

  it('should render footer with provide BottomBar size', () => {
    function TestComponent() {
      const modalContext = useContext(ModalContext);
      return <div data-testid='test-component' data-footer-size={modalContext.bottomBarSize} />;
    }

    const { getByTestId } = render(
      <Modal>
        <Modal.Body>
          <h1>Hello!</h1>
        </Modal.Body>
        <Modal.Footer>
          <TestComponent />
        </Modal.Footer>
      </Modal>,
    );

    expect(getByTestId('test-component').getAttribute('data-footer-size')).toBe('unset');
  });
});

describe('Modal.Body', () => {
  it('should provide viewport data through context', async () => {
    function TestComponent({ viewportRef }: { viewportRef: RefObject<HTMLElement | null> }) {
      const ref = useContext(ViewportContext);

      useEffect(() => {
        (viewportRef as any).current = ref.current;
      });

      return <div>Hello, world!</div>;
    }

    const viewportRef = createRef<HTMLElement>();

    render(
      <Modal>
        <Modal.Body>
          <TestComponent viewportRef={viewportRef} />
        </Modal.Body>
      </Modal>,
    );

    expect(viewportRef.current instanceof HTMLElement).toBe(true);
  });
});

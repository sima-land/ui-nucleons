import { createRef, RefObject, useContext, useEffect } from 'react';
import { Modal, ModalBody, ModalOverlap, ModalSize } from '..';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';
import { render, fireEvent } from '@testing-library/react';
import { LayerProvider, useLayer } from '../../helpers/layer';
import { ViewportContext } from '../../context/viewport';
import { PageScrollProvider } from '../../_internal/page-scroll-lock';
import { PageScrollLockAdapter } from '@sima-land/ui-nucleons/_internal/page-scroll-lock/types';
import { navigationButtons, TopBar } from '@sima-land/ui-nucleons/top-bar';

describe('Modal', () => {
  it('should render overlap content', () => {
    const { getByTestId } = render(
      <Modal>
        <ModalBody>This is modal body</ModalBody>
        <ModalOverlap>Test is modal overlap content</ModalOverlap>
      </Modal>,
    );

    expect(getByTestId('modal').querySelectorAll('[data-testid="modal:overlap"]')).toHaveLength(1);
    expect(getByTestId('modal:overlap').textContent).toBe('Test is modal overlap content');
  });

  it('should call onClose properly', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <Modal onClose={spy}>
        <TopBar title='Test title' buttons={navigationButtons({ onClose: spy })} />
        <ModalBody>Test modal content</ModalBody>
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
    const adapter: PageScrollLockAdapter = {
      lock: jest.fn(),
      unlock: jest.fn(),
    };

    const { unmount } = render(
      <PageScrollProvider adapter={() => adapter}>
        <Modal>
          <ModalBody>Hello</ModalBody>
        </Modal>
      </PageScrollProvider>,
    );

    expect(adapter.lock).toHaveBeenCalledTimes(0);
    expect(adapter.unlock).toHaveBeenCalledTimes(0);

    unmount();

    expect(adapter.lock).toHaveBeenCalledTimes(0);
    expect(adapter.unlock).toHaveBeenCalledTimes(0);
  });

  it('should disable/enable body scrolling when option is provided', () => {
    const adapter: PageScrollLockAdapter = {
      lock: jest.fn(),
      unlock: jest.fn(),
    };

    const { unmount } = render(
      <PageScrollProvider adapter={() => adapter}>
        <Modal>
          <ModalBody withScrollDisable>Hello</ModalBody>
        </Modal>
      </PageScrollProvider>,
    );

    expect(adapter.lock).toHaveBeenCalledTimes(1);
    expect(adapter.unlock).toHaveBeenCalledTimes(0);

    unmount();

    expect(adapter.lock).toHaveBeenCalledTimes(1);
    expect(adapter.unlock).toHaveBeenCalledTimes(1);
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
        <TopBar buttons={navigationButtons({ onBack: spy })} />
      </Modal>,
    );

    expect(queryAllByTestId('top-bar')).toHaveLength(1);
    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.click(getByTestId('top-bar:back'));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render TopBar with close button', () => {
    const spy = jest.fn();

    const { queryAllByTestId, getByTestId } = render(
      <Modal>
        <TopBar buttons={navigationButtons({ onClose: spy })} />
      </Modal>,
    );

    expect(queryAllByTestId('top-bar')).toHaveLength(1);
    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.click(getByTestId('top-bar:close'));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render close button and custom start button in TopBar', () => {
    const { getAllByTestId } = render(
      <Modal>
        <TopBar
          buttons={{
            ...navigationButtons({ onClose: jest.fn() }),
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

  it('should handle "data-testid" prop', () => {
    const { container } = render(
      <Modal data-testid='some-modal'>
        <ModalBody>Main Content</ModalBody>
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
          <ModalBody>
            <TestComponent />
          </ModalBody>
        </Modal>
      </LayerProvider>,
    );

    expect(getByTestId('test-component').getAttribute('data-layer')).toBe('120');
  });
});

describe('ModalBody', () => {
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
        <ModalBody>
          <TestComponent viewportRef={viewportRef} />
        </ModalBody>
      </Modal>,
    );

    expect(viewportRef.current instanceof HTMLElement).toBe(true);
  });
});

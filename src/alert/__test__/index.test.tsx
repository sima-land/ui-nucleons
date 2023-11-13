import { createRef } from 'react';
import { render } from '@testing-library/react';
import { Alert, AlertBody } from '..';
import { LayerProvider, useLayer } from '../../helpers/layer';
import { TopBar } from '../../top-bar';
import { BottomBar } from '../../bottom-bar';
import { PageScrollProvider } from '../../_internal/page-scroll-lock';
import { PageScrollLockAdapter } from '../../_internal/page-scroll-lock/types';

describe('Alert', () => {
  it('should handle "className" prop', () => {
    const { getByTestId } = render(
      <LayerProvider value={20}>
        <Alert className='custom-alert'>
          <AlertBody>[body]</AlertBody>
        </Alert>
      </LayerProvider>,
    );

    expect(getByTestId('alert').classList.contains('custom-alert')).toBe(true);
  });

  it('should render TopBar/BottomBar', () => {
    const { container } = render(
      <LayerProvider value={20}>
        <Alert>
          <AlertBody>[body]</AlertBody>
          <BottomBar>[footer]</BottomBar>
          <TopBar title='[header]' />
        </Alert>
      </LayerProvider>,
    );

    expect(container.textContent).toBe('[header][body][footer]');
  });

  it('should handle AlertBody with rootRef properly', () => {
    const ref = createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <LayerProvider value={20}>
        <Alert>
          <AlertBody data-testid='hello' rootRef={ref}>
            [body]
          </AlertBody>
        </Alert>
      </LayerProvider>,
    );

    expect(ref.current instanceof HTMLDivElement).toBe(true);
    expect(ref.current).toBe(getByTestId('hello'));
  });

  it('should increment layer by 100', () => {
    function TestComponent() {
      const layer = useLayer();
      return <div data-testid='test-component' data-layer={layer} />;
    }

    const { getByTestId } = render(
      <LayerProvider value={20}>
        <Alert>
          <AlertBody>
            <TestComponent />
          </AlertBody>
        </Alert>
      </LayerProvider>,
    );

    expect(getByTestId('test-component').getAttribute('data-layer')).toBe('120');
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
      <PageScrollProvider adapter={spy}>
        <Alert>
          <AlertBody
            rootRef={ref}
            withScrollDisable
            scrollDisableOptions={{ reserveScrollBarGap: true }}
          >
            <p>Hello!</p>
          </AlertBody>
        </Alert>
      </PageScrollProvider>,
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(ref.current instanceof HTMLDivElement).toBe(true);
    expect(spy.mock.calls[0][0] === ref.current).toBe(true);
    expect(spy.mock.calls[0][1]).toEqual({ reserveScrollBarGap: true });
  });

  it('AlertBody should NOT lock page scroll by default', () => {
    const adapter: PageScrollLockAdapter = {
      lock: jest.fn(),
      unlock: jest.fn(),
    };
    const spy = jest.fn<PageScrollLockAdapter, any[]>(() => adapter);

    expect(adapter.lock).toHaveBeenCalledTimes(0);

    render(
      <PageScrollProvider adapter={spy}>
        <Alert>
          <AlertBody>Hello</AlertBody>
        </Alert>
      </PageScrollProvider>,
    );

    expect(adapter.lock).toHaveBeenCalledTimes(0);
  });
});

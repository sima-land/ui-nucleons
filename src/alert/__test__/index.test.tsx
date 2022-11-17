import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import { Alert, AlertBody } from '..';
import { LayerProvider, useLayer } from '../../helpers/layer';
import { TopBar } from '../../top-bar';
import { BottomBar } from '../../bottom-bar';

describe('Alert', () => {
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

  it('should handle AlertBody with scrollableRef properly', () => {
    const ref = createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <LayerProvider value={20}>
        <Alert>
          <AlertBody data-testid='hello' scrollableRef={ref}>
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
});

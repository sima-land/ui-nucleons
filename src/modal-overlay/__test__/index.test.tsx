import { createRef } from 'react';
import { render } from '@testing-library/react';
import { ModalOverlay } from '..';
import { LayerProvider, useLayer } from '../../helpers/layer';

describe('ModalOverlay', () => {
  it('should renders correctly', () => {
    const { getByTestId } = render(
      <ModalOverlay>
        <h1>Some title here</h1>
      </ModalOverlay>,
    );

    expect(getByTestId('modal-overlay').querySelectorAll('h1')).toHaveLength(1);
    expect(getByTestId('modal-overlay').style.getPropertyValue('--vh')).toBe('7.68px');
  });

  it('should handle "rootRef" prop', () => {
    const ref = createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <ModalOverlay rootRef={ref}>
        <h1>Some title here</h1>
      </ModalOverlay>,
    );

    expect(ref.current instanceof HTMLDivElement).toBe(true);
    expect(getByTestId('modal-overlay')).toBe(ref.current);
  });

  it('should increment layer by 100', () => {
    function TestComponent() {
      const layer = useLayer();

      return (
        <div data-testid='test-component' data-layer={layer}>
          Hello
        </div>
      );
    }

    const { getByTestId } = render(
      <LayerProvider value={20}>
        <ModalOverlay>
          <TestComponent />
        </ModalOverlay>
      </LayerProvider>,
    );

    expect(getByTestId('test-component').getAttribute('data-layer')).toBe('120');
  });
});

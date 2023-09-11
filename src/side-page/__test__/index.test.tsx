import { render, fireEvent } from '@testing-library/react';
import { SidePage } from '..';
import { LayerProvider, useLayer } from '../../helpers/layer';

describe('SidePage', () => {
  it('should renders correctly', async function () {
    const { container, rerender } = render(
      <SidePage withTransitions shown={false}>
        <SidePage.Header title='Test title' />
        <SidePage.Body>
          <h1>Test body</h1>
        </SidePage.Body>
        <SidePage.Footer>
          <p>Test footer</p>
        </SidePage.Footer>
      </SidePage>,
    );

    expect(container).toMatchSnapshot();

    rerender(
      <SidePage withTransitions shown>
        <SidePage.Header title='Test title' />
        <SidePage.Body>
          <h1>Test body</h1>
        </SidePage.Body>
        <SidePage.Footer>
          <p>Test footer</p>
        </SidePage.Footer>
      </SidePage>,
    );

    // ждем окончания анимации
    await new Promise(done => setTimeout(done, 1000));

    expect(container).toMatchSnapshot();
    expect(container.querySelectorAll('.enter-active')).toHaveLength(0);
  });

  it('should handle header props', async function () {
    const onBack = jest.fn();
    const onClose = jest.fn();

    const { getByTestId } = render(
      <SidePage shown>
        <SidePage.Header title='Test title' onBack={onBack} onClose={onClose} />
        <SidePage.Body>
          <h1>Test body</h1>
        </SidePage.Body>
        <SidePage.Footer>
          <p>Test footer</p>
        </SidePage.Footer>
      </SidePage>,
    );

    expect(onBack).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('top-bar:back'));
    expect(onBack).toHaveBeenCalledTimes(1);

    expect(onClose).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('top-bar:close'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should increment layer by 100', () => {
    function TestComponent() {
      const layer = useLayer();
      return <div data-testid='test-component' data-layer={layer} />;
    }

    const { getByTestId } = render(
      <LayerProvider value={20}>
        <SidePage shown>
          <SidePage.Body>
            <TestComponent />
          </SidePage.Body>
        </SidePage>
      </LayerProvider>,
    );

    expect(getByTestId('test-component').getAttribute('data-layer')).toBe('120');
  });
});

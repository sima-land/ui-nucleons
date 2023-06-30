import { render, fireEvent } from '@testing-library/react';
import { WithTooltip } from '..';

describe('WithTooltip', () => {
  it('should works correctly', async () => {
    const { baseElement, findByTestId } = render(
      <WithTooltip tooltip='Hello, world!'>
        {(ref, toggle) => (
          <div data-testid='opener' ref={ref as any} onClick={() => toggle(true)}>
            Opener
          </div>
        )}
      </WithTooltip>,
    );

    expect(baseElement.querySelectorAll('[data-testid="tooltip"]')).toHaveLength(0);

    fireEvent.click(await findByTestId('opener'));

    expect(baseElement.querySelectorAll('[data-testid="tooltip"]')).toHaveLength(1);

    expect(baseElement).toMatchSnapshot();
  });

  it('should handle "onDismiss" prop', async () => {
    const spy = jest.fn();

    const { findByTestId } = render(
      <WithTooltip onDismiss={spy}>
        {(ref, toggle) => (
          <div data-testid='opener' ref={ref as any} onClick={() => toggle(true)}>
            Opener
          </div>
        )}
      </WithTooltip>,
    );

    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.click(await findByTestId('opener'));

    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.click(await findByTestId('tooltip:cross'));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

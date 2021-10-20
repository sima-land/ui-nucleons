import React from 'react';
import { render } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';
import { SidePage } from '..';

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

    expect(onBack).toBeCalledTimes(0);
    Simulate.click(getByTestId('side-page:back'));
    expect(onBack).toBeCalledTimes(1);

    expect(onClose).toBeCalledTimes(0);
    Simulate.click(getByTestId('side-page:close'));
    expect(onClose).toBeCalledTimes(1);
  });
});

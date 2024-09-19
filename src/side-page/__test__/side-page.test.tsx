import { render } from '@testing-library/react';
import { SidePage } from '../side-page';
import { SidePageBody } from '../side-page-body';

describe('SidePage', () => {
  it('should render core side page parts', () => {
    const { container, queryAllByTestId } = render(
      <SidePage>
        <header>Header!</header>

        <SidePageBody>
          <p>SidePageBody!</p>
        </SidePageBody>

        <footer>Footer!</footer>
      </SidePage>,
    );

    expect(container.textContent).toBe('Header!SidePageBody!Footer!');
    expect(queryAllByTestId('modal-overlay')).toHaveLength(1);
    expect(queryAllByTestId('side-page')).toHaveLength(1);
  });
});

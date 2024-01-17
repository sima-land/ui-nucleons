import { render } from '@testing-library/react';
import { Dropdown } from '../dropdown';

describe('Dropdown', () => {
  it('should render children', () => {
    const { container } = render(
      <>
        <Dropdown>Hello, world!</Dropdown>
      </>,
    );

    expect(container.textContent).toBe('Hello, world!');
  });

  it('should handle "data-testid" prop', () => {
    const { rerender, queryAllByTestId } = render(
      <Dropdown data-testid='foo-bar'>Hello, world!</Dropdown>,
    );

    expect(queryAllByTestId('dropdown')).toHaveLength(0);
    expect(queryAllByTestId('foo-bar')).toHaveLength(1);

    rerender(<Dropdown>Hello, world!</Dropdown>);

    expect(queryAllByTestId('dropdown')).toHaveLength(1);
    expect(queryAllByTestId('foo-bar')).toHaveLength(0);
  });

  it('should handle props for root element', () => {
    const { getByTestId } = render(
      <Dropdown className='test-class' role='menu'>
        Hello, world!
      </Dropdown>,
    );

    expect(getByTestId('dropdown').classList.contains('test-class')).toBe(true);
    expect(getByTestId('dropdown').getAttribute('role')).toBe('menu');
  });
});

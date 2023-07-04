import { act, fireEvent, render } from '@testing-library/react';
import { Avatar } from '../index';

describe('<Avatar />', () => {
  it('should handle size and imageUrl', () => {
    const { container, getByTestId } = render(<Avatar size={40} imageUrl='www.images.com' />);

    expect(getByTestId('avatar').classList.contains('size-40')).toBe(true);
    expect(container.querySelectorAll('img[src="www.images.com"]')).toHaveLength(1);
  });

  it('should render without image', () => {
    const { container } = render(<Avatar title='Johnson Carl' />);

    expect(container.querySelectorAll('img')).toHaveLength(0);
    expect(container.textContent).toBe('CJ');
  });

  it('should render without image and title', () => {
    const { container } = render(<Avatar />);

    expect(container.querySelectorAll('img')).toHaveLength(0);
    expect(container.textContent).toBe('');
  });

  it('should handle wrong size', () => {
    const { getByTestId } = render(<Avatar size={49.92} title='Jason' />);

    expect(getByTestId('avatar').classList.contains('size-72')).toBe(true);
  });

  it('should handle image error', () => {
    const { container } = render(
      <Avatar size={49.92} title='John Doe' imageUrl='https://www.images.com/random/' />,
    );

    expect(container.querySelectorAll('img')).toHaveLength(1);

    act(() => {
      container.querySelectorAll('img').forEach(el => {
        fireEvent.error(el);
      });
    });

    expect(container.querySelectorAll('img')).toHaveLength(0);
  });

  it('should handle imageUrl change', () => {
    const { container, rerender } = render(
      <Avatar title='John Doe' imageUrl='https://www.images.com/random/' />,
    );

    expect(container.querySelectorAll('img[src="https://www.images.com/random/"]')).toHaveLength(1);

    rerender(<Avatar title='John Doe' imageUrl='https://www.images.com/other/' />);

    expect(container.querySelectorAll('img[src="https://www.images.com/other/"]')).toHaveLength(1);
  });

  it('should handle "data-testid"', async function () {
    const { queryAllByTestId } = render(<Avatar size={40} data-testid='specific-avatar' />);

    expect(queryAllByTestId('avatar')).toHaveLength(0);
    expect(queryAllByTestId('specific-avatar')).toHaveLength(1);
  });
});

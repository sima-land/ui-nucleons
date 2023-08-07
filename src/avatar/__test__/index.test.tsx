import { act, fireEvent, render } from '@testing-library/react';
import { Avatar } from '../index';

describe('Avatar', () => {
  it('should handle size and imageUrl', () => {
    const { container } = render(<Avatar src='www.images.com' />);

    expect(container.querySelectorAll('img[src="www.images.com"]')).toHaveLength(1);
  });

  it('should render without image', () => {
    const { container } = render(<Avatar>CJ</Avatar>);

    expect(container.querySelectorAll('img')).toHaveLength(0);
    expect(container.textContent).toBe('CJ');
  });

  it('should render without image and children', () => {
    const { container } = render(<Avatar />);

    expect(container.querySelectorAll('img')).toHaveLength(0);
    expect(container.textContent).toBe('');
  });

  it('should handle image error', () => {
    const { container } = render(<Avatar src='https://www.images.com/random/' />);

    expect(container.querySelectorAll('img')).toHaveLength(1);

    act(() => {
      container.querySelectorAll('img').forEach(el => {
        fireEvent.error(el);
      });
    });

    expect(container.querySelectorAll('img')).toHaveLength(0);
  });

  it('should handle imageUrl change', () => {
    const { container, rerender } = render(<Avatar src='https://www.images.com/random/' />);

    expect(container.querySelectorAll('img[src="https://www.images.com/random/"]')).toHaveLength(1);

    rerender(<Avatar src='https://www.images.com/other/' />);

    expect(container.querySelectorAll('img[src="https://www.images.com/other/"]')).toHaveLength(1);
  });

  it('should handle "data-testid"', async function () {
    const { queryAllByTestId } = render(<Avatar data-testid='specific-avatar' />);

    expect(queryAllByTestId('avatar')).toHaveLength(0);
    expect(queryAllByTestId('specific-avatar')).toHaveLength(1);
  });
});

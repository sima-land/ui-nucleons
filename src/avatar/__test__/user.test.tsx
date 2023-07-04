import { UserAvatar, colorKey } from '../user';
import { render } from '@testing-library/react';

jest.mock('lodash', () => {
  const original = jest.requireActual('lodash');

  return {
    ...original,
    sample: jest.fn(arr => (Array.isArray(arr) ? arr[0] : undefined)),
  };
});

describe('UserAvatar', () => {
  beforeEach(() => {
    (window as any)[colorKey] = undefined;
  });

  it('should render all avatars on page with same color', () => {
    const { getAllByTestId } = render(
      <>
        <UserAvatar size={40} />,
        <UserAvatar size={64} />,
        <UserAvatar size={72} />,
      </>,
    );

    const getColor = (el: HTMLElement) => el.style.getPropertyValue('--avatar-color');
    const colors = [...getAllByTestId('avatar')].map(getColor);
    const unique = new Set(colors);

    expect(unique.size).toBe(1);
  });
});

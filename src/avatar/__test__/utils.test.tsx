import { act, fireEvent, render } from '@testing-library/react';
import { Avatar } from '..';
import {
  getNameInitials,
  getAvatarIconProps,
  getUserAvatarColor,
  getUserAvatarProps,
} from '../utils';

describe('getNameInitials()', () => {
  it('should return correct result', () => {
    expect(getNameInitials('John Doe')).toEqual('J');
    expect(getNameInitials('John')).toEqual('J');
    expect(getNameInitials('John ')).toEqual('J');
    expect(getNameInitials('Hello World Foo Bar Baz')).toEqual('H');
    expect(getNameInitials('Лорд Командующий')).toEqual('Л');
    expect(getNameInitials('лорд командующий')).toEqual('Л');
    expect(getNameInitials('')).toEqual('');
    expect(getNameInitials(123)).toEqual('');
    expect(getNameInitials(null)).toEqual('');
    expect(getNameInitials(undefined)).toEqual('');
  });
});

describe('getUserAvatarColor', () => {
  it('should return color based on identity', () => {
    expect(getUserAvatarColor('12345')).toBe('#eb8585');
  });
});

describe('getAvatarIconProps', () => {
  it('should return props for icon', () => {
    expect(getAvatarIconProps()).toEqual({ className: 'icon' });
  });
});

describe('getUserAvatarProps', () => {
  it('should return props for icon', () => {
    const { container, getByTestId, rerender } = render(
      <Avatar
        {...getUserAvatarProps(
          {
            id: 12,
            name: 'Jack Sparrow',
            image: 'http://img.com/user',
          },
          {
            className: 'hello-world',
          },
        )}
      />,
    );

    expect(getByTestId('avatar').classList.contains('hello-world')).toBe(true);
    expect(getByTestId('avatar').style.getPropertyValue('--avatar-color')).toBe('#85caf5');
    expect(container.querySelectorAll('img[src="http://img.com/user"]')).toHaveLength(1);

    act(() => {
      container.querySelectorAll('img').forEach(el => fireEvent.error(el));
    });

    expect(container.querySelectorAll('img')).toHaveLength(0);
    expect(container.querySelectorAll('svg')).toHaveLength(0);
    expect(container.textContent).toBe('J');

    rerender(
      <Avatar
        {...getUserAvatarProps(
          {
            id: 12,
            image: 'http://img.com/user',
          },
          {
            className: 'hello-world',
          },
        )}
      />,
    );

    expect(container.querySelectorAll('img')).toHaveLength(0);
    expect(container.querySelectorAll('svg')).toHaveLength(1);
    expect(container.textContent).toBe('');

    rerender(
      <Avatar
        {...getUserAvatarProps(
          {
            image: 'http://img.com/user',
          },
          {
            className: 'hello-world',
          },
        )}
      />,
    );

    expect(getByTestId('avatar').style.getPropertyValue('--avatar-color')).toBe('');
    expect(container.querySelectorAll('img')).toHaveLength(0);
    expect(container.querySelectorAll('svg')).toHaveLength(1);
    expect(container.textContent).toBe('');
  });
});

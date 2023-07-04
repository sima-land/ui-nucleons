import { useEffect, useState } from 'react';
import { sample } from 'lodash';
import { Avatar, AvatarProps } from '.';
import { Token } from '../colors';

export type UserAvatarProps = Omit<AvatarProps, 'bgColor' | 'bgOpacity' | 'textColor'>;

const COLORS: ReadonlyArray<Token> = [
  'additional-deep-red',
  'additional-red',
  'additional-teal',
  'additional-green',
  'additional-light-green',
  'additional-amber',
  'additional-purple',
  'additional-violet',
  'additional-deep-purple',
  'additional-electric-blue',
  'additional-light-blue',
  'additional-cyan',
  'additional-blue-gray',
  'additional-deep-orange',
];

export const colorKey = Symbol.for('user-avatar:color-key');

/**
 * Компонент аватара пользователя (не сотрудника).
 * @param props Свойства. Поддерживаются свойства Avatar.
 * @return Элемент.
 */
export function UserAvatar(props: UserAvatarProps) {
  const [color, setColor] = useState<(typeof COLORS)[number]>();

  useEffect(() => {
    const source: any = window;

    // запоминаем цвет (пока только один для всех аватаров на странице)
    source[colorKey] = source[colorKey] || sample(COLORS);

    setColor(source[colorKey]);
  }, []);

  return <Avatar {...props} bgColor={color} bgOpacity={color ? 0.48 : 0} textColor='basic-white' />;
}

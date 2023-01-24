import React, { useEffect, useState } from 'react';
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
export const UserAvatar = (props: UserAvatarProps) => {
  const [color, setColor] = useState<(typeof COLORS)[number]>();

  useEffect(() => {
    // запоминаем цвет (пока только один для всех аватаров на странице)
    (window as any)[colorKey] = (window as any)[colorKey] || sample(COLORS);
    setColor((window as any)[colorKey]);
  }, []);

  return <Avatar {...props} bgColor={color} bgOpacity={color ? 0.48 : 0} textColor='basic-white' />;
};

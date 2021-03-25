import React, { useEffect, useState } from 'react';
import { sample } from 'lodash';
import { Avatar, Props as BaseProps } from '.';
import { Token } from '../colors';

export type Props = Omit<BaseProps, 'bgColor' | 'bgOpacity' | 'textColor'>;

const COLORS: ReadonlyArray<Token> = [
  'additional-deep-red',
  'additional-red',
  'additional-teal',
  'additional-green',
  'additional-grass',
  'additional-light-green',
  'additional-amber',
  'additional-purple',
  'additional-violet',
  'additional-deep-purple',
  'additional-blue',
  'additional-light-blue',
  'additional-cyan',
  'additional-blue-gray',
  'additional-deep-orange',
];

export const colorKey = Symbol.for('user-avatar:color-key');

/**
 * Компонент аватара пользователя (не сотрудника).
 * @param props Свойства. Поддерживаются свойства Avatar.
 * @return Компонент.
 */
export const UserAvatar: React.FC<Props> = props => {
  const [color, setColor] = useState((window as any)[colorKey]);

  useEffect(() => {
    // запоминаем цвет (пока только один для всех аватаров на странице)
    (window as any)[colorKey] = (window as any)[colorKey] || sample(COLORS);
    setColor((window as any)[colorKey]);
  }, []);

  return (
    <Avatar
      {...props}
      bgColor={color}
      bgOpacity={color ? 0.48 : 0}
      textColor='white'
    />
  );
};

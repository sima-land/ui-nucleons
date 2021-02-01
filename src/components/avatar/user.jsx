import React, { useEffect, useState } from 'react';
import { sample } from 'lodash';
import { Avatar } from '.';

const COLORS = [
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

export const colorKey = Symbol('user-avatar:color-key');

/**
 * Компонент аватара пользователя (не сотрудника).
 * @param {Object} props Свойства. Поддерживаются свойства Avatar.
 * @return {ReactElement} Компонент.
 */
export const UserAvatar = props => {
  const [color, setColor] = useState(window[colorKey]);

  useEffect(() => {
    // запоминаем цвет (пока только один для всех аватаров на странице)
    window[colorKey] = window[colorKey] || sample(COLORS);
    setColor(window[colorKey]);
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

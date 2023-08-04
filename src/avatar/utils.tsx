import type { SVGAttributes } from 'react';
import type { AvatarProps } from './types';
import { COLOR } from '../colors';
import PersonSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Person';
import classNames from 'classnames';
import styles from './utils.module.scss';

const USER_AVATAR_COLOR_TOKENS: ReadonlyArray<string> = [
  COLOR['additional-deep-red'],
  COLOR['additional-red'],
  COLOR['additional-teal'],
  COLOR['additional-green'],
  COLOR['additional-light-green'],
  COLOR['additional-amber'],
  COLOR['additional-pink'],
  COLOR['additional-purple'],
  COLOR['additional-violet'],
  COLOR['additional-deep-purple'],
  COLOR['basic-blue'],
  COLOR['additional-light-blue'],
  COLOR['additional-cyan'],
  COLOR['additional-blue-gray'],
  COLOR['additional-deep-orange'],
];

/**
 * Возвращает свойства для аватара пользователя.
 * @param payload Данные пользователя.
 * @param customProps Дополнительные свойства аватара.
 * @return Свойства.
 */
export function getUserAvatarProps(
  {
    id,
    name,
    image,
  }: {
    id?: number;
    name?: string;
    image?: string;
  },
  customProps?: AvatarProps,
): AvatarProps {
  return {
    src: image,
    children: getNameInitials(name) || <PersonSVG {...getAvatarIconProps()} />,
    ...customProps,
    className: classNames(styles.user, customProps?.className),
    style: {
      '--avatar-color': id ? getUserAvatarColor(`${id}`) : undefined,
      ...customProps?.style,
    },
  };
}

/**
 * Возвращает цвет аватара текущего пользователя.
 * @param identity Срока, идентифицирующая пользователя.
 * @return Цвет.
 */
export function getUserAvatarColor(identity: string): string {
  let total = 0;

  for (let i = 0; i < identity.length; i++) {
    total += identity.charCodeAt(i);
  }

  const list = USER_AVATAR_COLOR_TOKENS;
  const hash = total % list.length;

  return list[hash];
}

/**
 * Формирует инициалы имени.
 * @param value Строка.
 * @return Инициалы.
 */
export function getNameInitials(value: any): string {
  if (typeof value === 'string') {
    return (value[0] ?? '').toUpperCase();
  }

  return '';
}

/**
 * Возвращает свойства для иконки внутри аватара.
 * @return Свойства.
 */
export function getAvatarIconProps(): SVGAttributes<SVGSVGElement> {
  return {
    className: styles.icon,
  };
}

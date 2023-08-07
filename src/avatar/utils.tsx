import type { SVGAttributes } from 'react';
import type { AvatarProps } from './types';
import PersonSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Person';
import classNames from 'classnames';
import styles from './utils.module.scss';

const USER_AVATAR_COLOR_TOKENS: ReadonlyArray<string> = [
  '#eb8585',
  '#fda09b',
  '#f49bb1',
  '#ffd785',
  '#ffbb85',
  '#89d7c7',
  '#85e5ac',
  '#b5ef90',
  '#93c4ee',
  '#85caf5',
  '#85ddea',
  '#b3c1c7',
  '#dc9bd5',
  '#b4a8f0',
  '#c999e9',
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

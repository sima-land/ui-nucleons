import React, { forwardRef } from 'react';
import { getNoIndex } from '../helpers/get-no-index';
import { color as getColorClass, hoverColor } from '../styling/colors';
import classnames from 'classnames/bind';
import { Token } from '../colors';
import styles from './link.scss';

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {

  /** Цвет (название токена). */
  color?: Extract<Token, 'brand-blue' | 'gray87' | 'gray38'>

  /** Нужно ли оборачивать содержимое комментариями no-index. */
  noIndex?: boolean

  /** Выводить как псевдо-ссылку. */
  pseudo?: boolean

  /** Отключает ссылку подобно кнопке. */
  disabled?: boolean
}

const COLOR_CLASS = {
  'brand-blue': classnames(getColorClass('brand-blue'), hoverColor('brand-deep-blue')),
  gray87: classnames(getColorClass('gray87'), hoverColor('gray54')),
  gray38: classnames(getColorClass('gray38'), hoverColor('gray54')),
} as const;

const cx = classnames.bind(styles);

/**
 * Возвращает объект со свойствами, формирующими содержимое.
 * @param children Содержимое линка.
 * @param noIndex Флаг запрета индексации.
 * @return Объект со свойствами, формирующими содержимое..
 */
const getContentProps = (children: React.ReactNode, noIndex?: boolean) => noIndex
  ? { dangerouslySetInnerHTML: getNoIndex(children) }
  : { children };

/**
 * Компонент ссылки.
 * @param props Свойства компонента. Поддерживаются свойства span/a.
 * @param ref Реф для DOM-элемента ссылки.
 * @return Элемент.
 */
export const Link = forwardRef<HTMLAnchorElement, Props>(function Link ({
  children,
  className,
  color = 'brand-blue',
  disabled,
  noIndex = false,
  pseudo,
  role,
  tabIndex,
  ...restProps
}, ref) {
  const baseProps = pseudo
    ? {
      role: role || 'button',
      tabIndex: disabled ? undefined : tabIndex || 0,
    }
    : { role, tabIndex };

  return (
    <a
      {...baseProps}
      {...restProps}
      ref={ref}
      className={cx(
        'link',
        className,
        COLOR_CLASS[color],
        { disabled }
      )}
      {...getContentProps(children, noIndex)}
    />
  );
});

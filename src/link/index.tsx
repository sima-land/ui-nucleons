import React, { forwardRef } from 'react';
import { getNoIndex } from '../helpers/get-no-index';
import { color as getColorClass } from '../styling/colors';
import classNames from 'classnames/bind';
import styles from './link.scss';
import { Token } from '../colors';

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {

  /** Цвет (название токена). */
  color?: Token

  /** Нужно ли оборачивать содержимое комментариями no-index. */
  noIndex?: boolean

  /** Выводить как псевдо-ссылку. */
  pseudo?: boolean
}

const cx = classNames.bind(styles);

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
 * @param props.noIndex Запрет индексации названия ссылки поисковиками.
 * @param props.color Цвет.
 * @param props.pseudo Нужно ли выводить не ссылочный элемент span, стилизованный под ссылку.
 * @param ref Реф для DOM-элемента ссылки.
 * @return Элемент.
 */
export const Link = forwardRef<HTMLAnchorElement, Props>(function Link ({
  children,
  className,
  color = 'brand-blue',
  noIndex = false,
  pseudo,
  role,
  tabIndex,
  ...restProps
}, ref) {
  const baseProps = pseudo
    ? { role: role || 'button', tabIndex: tabIndex || 0 }
    : { role, tabIndex };

  return (
    <a
      {...baseProps}
      {...restProps}
      ref={ref}
      className={cx(
        'link',
        className,
        getColorClass(color)
      )}
      {...getContentProps(children, noIndex)}
    />
  );
});

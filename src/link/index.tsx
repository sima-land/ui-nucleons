import React, { forwardRef } from 'react';
import { getNoIndex } from '../helpers/get-no-index';
import classnames from 'classnames/bind';
import { Token } from '../colors';
import styles from './link.module.scss';

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {

  /** Цвет (название токена). */
  color?: Extract<Token, 'brand-blue' | 'gray87' | 'gray38'>

  /** Нужно ли оборачивать содержимое комментариями no-index. */
  noIndex?: boolean

  /** Выводить как псевдо-ссылку. */
  pseudo?: boolean

  /** Отключает ссылку подобно кнопке. */
  disabled?: boolean

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

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
  'data-testid': testId = 'anchor',
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
      data-testid={testId}
      ref={ref}
      className={cx(
        'link',
        className,
        color,
        { disabled }
      )}
      {...getContentProps(children, noIndex)}
    />
  );
});

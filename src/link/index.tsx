import { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';
import { getNoIndex } from '../helpers/get-no-index';
import { Token } from '../colors';
import classnames from 'classnames/bind';
import styles from './link.module.scss';

export type LinkColor = Extract<
  Token,
  | 'basic-blue'
  | 'basic-gray87'
  | 'basic-gray38'
  | 'basic-white'
  | 'additional-red'
  | 'additional-teal'
>;

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Цвет (название токена). */
  color?: LinkColor;

  /**
   * Нужно ли оборачивать содержимое комментариями no-index.
   * @deprecated
   */
  noIndex?: boolean;

  /** Выводить как псевдо-ссылку. */
  pseudo?: boolean;

  /** Отключает ссылку подобно кнопке. */
  disabled?: boolean;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;

  /** Нужно ли подчеркивание. */
  underline?: boolean;
}

const cx = classnames.bind(styles);

/**
 * Возвращает объект со свойствами, формирующими содержимое.
 * @param children Содержимое линка.
 * @param noIndex Флаг запрета индексации.
 * @return Объект со свойствами, формирующими содержимое.
 */
const getContentProps = (children: ReactNode, noIndex?: boolean) =>
  noIndex ? { dangerouslySetInnerHTML: getNoIndex(children) } : { children };

/**
 * Компонент ссылки.
 * @param props Свойства компонента. Поддерживаются свойства span/a.
 * @param ref Реф для DOM-элемента ссылки.
 * @return Элемент.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    children,
    className,
    color = 'basic-blue',
    disabled,
    noIndex = false,
    pseudo,
    role,
    tabIndex,
    underline,
    'data-testid': testId = 'anchor',
    ...restProps
  },
  ref,
) {
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
      className={cx('link', className, color, { disabled, underline })}
      {...getContentProps(children, noIndex)}
    />
  );
});

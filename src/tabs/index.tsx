import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import classnames from 'classnames/bind';
import styles from './tabs.module.scss';

export interface TabsStyle extends CSSProperties {
  '--tabs-gap'?: string;
}

export interface TabsProps {
  /** Визуальный вариант вкладок. */
  view?: 'clean' | 'clean-underline' | 'round';

  /** Необходимо ли растягивать вкладки под размер контейнера. */
  stretch?: boolean;

  /** Размер отступа между вкладками. */
  gapSize?: 's' | 'm' | 'unset';

  /** Внешние классы. */
  className?: string;

  /** Стили. */
  style?: TabsStyle;

  /** Вкладки. */
  children?: ReactNode;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

export interface TabsItemProps {
  /** Название вкладки. */
  name?: string;

  /** Выбрана ли вкладка. */
  selected?: boolean;

  /** Отключена ли вкладка. */
  disabled?: boolean;

  /** Обработчик клика. */
  onClick?: MouseEventHandler<HTMLLIElement>;

  /** Содержимое. */
  children?: ReactNode;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const cx = classnames.bind(styles);

/**
 * Вкладка.
 * @param props Свойства.
 * @return Элемент.
 */
function Tab({
  name,
  selected,
  disabled,
  'data-testid': testId = 'tab',
  onClick,
  children,
}: TabsItemProps) {
  return (
    <li
      className={cx('item', { selected, disabled })}
      data-testid={testId}
      onClick={disabled ? undefined : onClick}
    >
      {typeof name !== 'undefined' ? String(name) : children}
    </li>
  );
}

/**
 * Компонент строки вкладок.
 * @param props Свойства.
 * @return Элемент.
 */
export function Tabs({
  children,
  view = 'clean',
  stretch = false,
  gapSize = 'm',
  className,
  style,
  'data-testid': testId = 'tabs',
}: TabsProps) {
  const rootClassName = cx(
    'root',
    `view-${view}`,
    gapSize && gapSize !== 'unset' && `gap-${gapSize}`,
    { stretch },
    className,
  );

  return (
    <ul data-testid={testId} className={rootClassName} style={style}>
      {children}
    </ul>
  );
}

Tabs.Item = Tab;

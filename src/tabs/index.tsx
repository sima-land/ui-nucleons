import { Children, isValidElement } from 'react';
import classnames from 'classnames/bind';
import styles from './tabs.module.scss';

export interface TabsProps {
  /** Визуальный вариант вкладок. */
  view?: 'clean' | 'clean-underline' | 'round';

  /** Необходимо ли растягивать вкладки под размер контейнера. */
  stretch?: boolean;

  /** Размер отступа между вкладками. */
  gapSize?: 's' | 'm';

  /** Внешние классы. */
  className?: string;

  /** Вкладки. */
  children?: React.ReactNode;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

export interface TabsItemProps {
  /** Название вкладки. */
  name: string;

  /** Выбрана ли вкладка. */
  selected?: boolean;

  /** Отключена ли вкладка. */
  disabled?: boolean;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;

  /** Обработчик клика. */
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

const cx = classnames.bind(styles);

/**
 * Вкладка.
 * @param props Свойства.
 * @return Элемент.
 */
const Tab = ({
  name,
  selected,
  disabled,
  'data-testid': testId = 'tab',
  onClick,
}: TabsItemProps) => (
  <li
    className={cx('item', { selected, disabled })}
    data-testid={testId}
    onClick={disabled ? undefined : onClick}
  >
    {String(name)}
  </li>
);

/**
 * Компонент строки вкладок.
 * @param props Свойства.
 * @return Элемент.
 */
export const Tabs = ({
  children,
  view = 'clean',
  stretch = false,
  gapSize = 'm',
  className,
  'data-testid': testId = 'tabs',
}: TabsProps) => (
  <ul
    data-testid={testId}
    className={cx('root', `view-${view}`, `gap-${gapSize}`, { stretch }, className)}
  >
    {Children.toArray(children).filter(child => isValidElement(child) && child.type === Tab)}
  </ul>
);

Tabs.Item = Tab;

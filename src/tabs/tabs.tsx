import type { TabProps, TabsProps } from './types';
import classNames from 'classnames/bind';
import styles from './tabs.module.scss';

const cx = classNames.bind(styles);

/**
 * Вкладка.
 * @param props Свойства.
 * @return Элемент.
 */
export function Tab({
  name,
  selected,
  disabled,
  onClick,
  children,
  className,
  style,
  'data-testid': testId = 'tab',
}: TabProps) {
  return (
    <li
      className={cx('item', { selected, disabled }, className)}
      style={style}
      onClick={disabled ? undefined : onClick}
      data-testid={testId}
    >
      {typeof name !== 'undefined' ? String(name) : children}
    </li>
  );
}

/**
 * Блок списка вкладок.
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

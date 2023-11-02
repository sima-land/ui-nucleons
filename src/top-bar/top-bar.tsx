import { ReactNode, useContext } from 'react';
import { TopBarButtonProps, TopBarProps, TopBarSize } from './types';
import { TopBarButtonGroupContext } from './utils';
import { InnerBorder } from '../styling/borders';
import classnames from 'classnames/bind';
import styles from './top-bar.module.scss';

// некоторым компонентам нужно знать конкретную высоту
export const TOP_BAR_HEIGHT: Readonly<Record<TopBarSize, number>> = {
  s: 56,
  m: 64,
  xl: 80,
};

const cx = classnames.bind(styles);

/**
 * Компонент шапки модальных окон/экранов.
 * @param props Свойства.
 * @return Элемент.
 */
export function TopBar({
  divided,
  size = 'm',
  rounds = 'm',
  title,
  subtitle,
  buttons: { start, startSecondary, end, endSecondary } = {},
  className,
  style,
  'data-testid': testId = 'top-bar',
}: TopBarProps) {
  const hasStartButtons = start || startSecondary;
  const hasEndButtons = end || endSecondary;
  const hasButtons = hasStartButtons || hasEndButtons;

  const rootClasses = cx(
    'root',
    `size-${size}`,
    className,
    divided && InnerBorder.bottom,
    rounds !== 'unset' && `rounds-${rounds}`,
    !subtitle && 'no-subtitle',
  );

  return (
    <div className={rootClasses} style={style} data-testid={testId}>
      {hasButtons && (
        <div className={cx('side')}>
          {hasStartButtons && (
            <TopBarButtonGroup>
              {start && <TopBarButton {...start} />}
              {startSecondary && <TopBarButton {...startSecondary} />}
            </TopBarButtonGroup>
          )}
          {hasEndButtons && (
            <TopBarButtonGroup stub end>
              {endSecondary && <TopBarButton {...endSecondary} />}
              {end && <TopBarButton {...end} />}
            </TopBarButtonGroup>
          )}
        </div>
      )}

      {/* центральный блок */}
      <div className={cx('main')}>
        {title && <div className={cx('title')}>{title}</div>}
        {subtitle && <div className={cx('subtitle')}>{subtitle}</div>}
      </div>

      {hasButtons && (
        <div className={cx('side')}>
          {hasEndButtons && (
            <TopBarButtonGroup end>
              {endSecondary && <TopBarButton {...endSecondary} />}
              {end && <TopBarButton {...end} />}
            </TopBarButtonGroup>
          )}
          {hasStartButtons && (
            <TopBarButtonGroup stub>
              {start && <TopBarButton {...start} />}
              {startSecondary && <TopBarButton {...startSecondary} />}
            </TopBarButtonGroup>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Компонент группы кнопок.
 * @param props Свойства.
 * @return Элемент.
 */
function TopBarButtonGroup({
  children,
  stub,
  end,
}: {
  children: ReactNode;
  stub?: boolean;
  end?: boolean;
}) {
  return (
    <TopBarButtonGroupContext.Provider value={{ stub }}>
      <div className={cx('button-group', { stub, end })}>{children}</div>
    </TopBarButtonGroupContext.Provider>
  );
}

/**
 * Компонент кнопки-иконки.
 * @param props Свойства.
 * @return Элемент.
 */
function TopBarButton({
  text,
  icon,
  className,
  'data-testid': testId = 'top-bar:button',
  ...buttonProps
}: TopBarButtonProps) {
  const { stub } = useContext(TopBarButtonGroupContext);

  return (
    <button
      {...(!stub && {
        // игнорируем атрибуты и свойства для заглушек
        ...buttonProps,
        'data-testid': testId,
      })}
      type='button'
      className={cx('button', icon && 'iconic', stub && 'stub', className)}
      aria-hidden={stub}
    >
      {icon && !stub ? icon : text}
    </button>
  );
}

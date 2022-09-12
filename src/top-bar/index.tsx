import React, { createContext, ReactNode, useContext } from 'react';
import classnames from 'classnames/bind';
import classes from './top-bar.module.scss';
import { InnerBorder } from '../styling/borders';

export type TopBarSize = 's' | 'm' | 'xl';

interface TopBarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Иконка. */
  icon?: React.ReactNode;

  /** Текст. */
  text?: string;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

export interface TopBarProps {
  /** Свойства кнопок. */
  buttons?: {
    start?: TopBarButtonProps;
    startSecondary?: TopBarButtonProps;
    end?: TopBarButtonProps;
    endSecondary?: TopBarButtonProps;
  };

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Размер. */
  size?: TopBarSize;

  /** Подзаголовок. */
  subtitle?: string;

  /** Заголовок. */
  title?: string;

  /** Нужна ли разделительная черта снизу. */
  divided?: boolean;
}

// некоторым компонентам нужно знать конкретную высоту, делаем единый источник
export const TOP_BAR_HEIGHT: Readonly<Record<TopBarSize, number>> = {
  s: 56,
  m: 64,
  xl: 80,
};

const cx = classnames.bind(classes);

/**
 * Компонент шапки модальных окон/экранов.
 * @param props Свойства.
 * @return Элемент.
 */
export function TopBar({
  divided,
  size = 'm',
  title,
  subtitle,
  buttons: { start, startSecondary, end, endSecondary } = {},
  className,
}: TopBarProps) {
  const hasStartButtons = start || startSecondary;
  const hasEndButtons = end || endSecondary;
  const hasButtons = hasStartButtons || hasEndButtons;

  const rootClasses = cx(
    'root',
    `size-${size}`,
    className,
    divided && InnerBorder.bottom,
    !subtitle && 'no-subtitle',
  );

  return (
    <div className={rootClasses} style={{ height: `${TOP_BAR_HEIGHT[size]}px` }}>
      {hasButtons && (
        <div className={cx('side')}>
          {hasStartButtons && (
            <ButtonGroup>
              {start && <TopBarButton {...start} />}
              {startSecondary && <TopBarButton {...startSecondary} />}
            </ButtonGroup>
          )}
          {hasEndButtons && (
            <ButtonGroup stub end>
              {endSecondary && <TopBarButton {...endSecondary} />}
              {end && <TopBarButton {...end} />}
            </ButtonGroup>
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
            <ButtonGroup end>
              {endSecondary && <TopBarButton {...endSecondary} />}
              {end && <TopBarButton {...end} />}
            </ButtonGroup>
          )}
          {hasStartButtons && (
            <ButtonGroup stub>
              {start && <TopBarButton {...start} />}
              {startSecondary && <TopBarButton {...startSecondary} />}
            </ButtonGroup>
          )}
        </div>
      )}
    </div>
  );
}

export const ButtonGroupContext = createContext<{ stub?: boolean }>({ stub: false });

/**
 * Компонент группы кнопок.
 * @param props Свойства.
 * @return Элемент.
 */
function ButtonGroup({
  children,
  stub,
  end,
}: {
  children: ReactNode;
  stub?: boolean;
  end?: boolean;
}) {
  return (
    <ButtonGroupContext.Provider value={{ stub }}>
      <div className={cx('button-group', { stub, end })}>{children}</div>
    </ButtonGroupContext.Provider>
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
  const { stub } = useContext(ButtonGroupContext);

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

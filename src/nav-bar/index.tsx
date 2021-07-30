import React from 'react';
import classes from './nav-bar.module.scss';
import classnames from 'classnames/bind';
import { prop } from 'lodash/fp';
import { InnerBorder } from '../styling/borders';
import { COLORS } from '../colors';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  icon?: React.ComponentType<React.SVGAttributes<SVGSVGElement>>
  stub?: boolean
  shift?: 'left' | 'right'
}

export interface NavBarProps {

  /** Заголовок. */
  title?: string

  /** Подзаголовок. */
  subtitle?: string

  /** Класс. */
  className?: string

  /** Нужно ли выводить полоску снизу. */
  bottomBordered?: boolean

  /** Свойства кнопок. */
  buttons?: {
    start?: ButtonProps
    startSecondary?: ButtonProps
    end?: ButtonProps
    endSecondary?: ButtonProps
  }
}

const cx = classnames.bind(classes);

const getIcon = prop('icon');

/**
 * Компонент панели навигации.
 * @param props Свойства.
 * @return Элемент.
 */
export const NavBar = ({
  title,
  subtitle,
  className,
  bottomBordered = false,
  buttons: {
    start,
    startSecondary,
    end,
    endSecondary,
  } = {},
}: NavBarProps) => {
  const startButtons = [start, startSecondary];
  const endButtons = [end, endSecondary];

  const hasStartButtons = startButtons.some(Boolean);
  const hasEndButtons = endButtons.some(Boolean);
  const hasButtons = hasStartButtons || hasEndButtons;

  const isStartIconGroup = hasStartButtons && startButtons.every(getIcon);
  const isEndIconGroup = hasEndButtons && endButtons.every(getIcon);

  return (
    <div className={cx('nav-bar', className, bottomBordered && InnerBorder.bottom)}>
      {hasButtons && (
        <div className={cx('button-groups')}>
          {hasStartButtons && (
            <div className={cx('group')}>
              {start && (
                <NavButton shift={isStartIconGroup ? 'right' : undefined} {...start} />
              )}
              {startSecondary && (
                <NavButton shift={isStartIconGroup ? 'left' : undefined} {...startSecondary} />
              )}
            </div>
          )}
          {hasEndButtons && (
            <div className={cx('group')}>
              {endSecondary && (
                <NavButton stub shift={isEndIconGroup ? 'right' : undefined} {...endSecondary} />
              )}
              {end && (
                <NavButton stub shift={isEndIconGroup ? 'left' : undefined} {...end} />
              )}
            </div>
          )}
        </div>
      )}

      {/* центральный блок */}
      <div className={cx('main')}>
        {Boolean(title) && (
          <div className={cx('title', 'truncate')}>{title}</div>
        )}
        {Boolean(subtitle) && (
          <div className={cx('subtitle', 'truncate')}>{subtitle}</div>
        )}
      </div>

      {hasButtons && (
        <div className={cx('button-groups', 'end')}>
          {hasEndButtons && (
            <div className={cx('group')}>
              {endSecondary && (
                <NavButton shift={isEndIconGroup ? 'right' : undefined} {...endSecondary} />
              )}
              {end && (
                <NavButton shift={isEndIconGroup ? 'left' : undefined} {...end} />
              )}
            </div>
          )}
          {hasStartButtons && (
            <div className={cx('group')}>
              {start && (
                <NavButton stub shift={isStartIconGroup ? 'right' : undefined} {...start} />
              )}
              {startSecondary && (
                <NavButton stub shift={isStartIconGroup ? 'left' : undefined} {...startSecondary} />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Компонент кнопки (с текстом или иконки).
 * @param props Свойства.
 * @param props.text Текст.
 * @param props.icon Функция возвращающая React-элемент svg-иконки (имеет приоритет над "text").
 * @param props.stub Является ли кнопка заглушкой (будет скрыта через aria, не будет содержать иконки).
 * @param props.shift Определяет как сместить иконку внутри кнопки.
 * @return Элемент.
 */
export const NavButton: React.FC<ButtonProps> = ({
  text,
  icon: Icon,
  stub = false,
  shift,
  className,
  ...buttonProps
}) => (
  <button
    {...buttonProps}
    type='button'
    className={cx(
      'button',
      Icon && 'icon',
      shift === 'left' && 'shift-left',
      shift === 'right' && 'shift-right',
      stub && 'stub',
      className
    )}
    aria-hidden={stub}
  >
    {
      Icon && !stub
        ? <Icon fill={COLORS.get('gray87')} className={cx('svg')} aria-hidden='true' />
        : text
    }
  </button>
);

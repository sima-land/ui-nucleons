import React from 'react';
import classnames from 'classnames/bind';
import has from 'lodash/has';
import classes from './top-bar.scss';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  icon?: React.ReactNode
  'data-testid'?: string
}

export interface Props {
  className?: string,
  size?: 's' | 'm' | 'l'
  title?: string
  subtitle?: string
  buttonsProps?: {
    start?: ButtonProps
    startSecondary?: ButtonProps
    end?: ButtonProps
    endSecondary?: ButtonProps
  }
}

const cx = classnames.bind(classes);

/**
 * Компонент шапки модальных окон/экранов.
 * @param props Свойства.
 * @param props.size Размер.
 * @param props.title Заголовок.
 * @param props.subtitle Подзаголовок.
 * @param props.buttonsProps Свойства кнопок.
 * @param props.className CSS-класс корневого элемента.
 * @return Элемент.
 */
const TopBar: React.FC<Props> = ({
  size = 'm',
  title,
  subtitle,
  buttonsProps: {
    start,
    startSecondary,
    end,
    endSecondary,
  } = {},
  className,
}) => {
  const hasStart = has(start, 'icon');
  const hasStartSecondary = has(startSecondary, 'icon');
  const hasEnd = has(end, 'icon');
  const hasEndSecondary = has(endSecondary, 'icon');

  const stub = hasStart || hasEnd ? iconStub : null;
  const secondaryStub = hasStartSecondary || hasEndSecondary ? iconStub : null;

  return (
    <div className={cx('modal-header', `size-${size}`, className)}>
      {hasStart ? <IconButton {...start} /> : stub}
      {hasStartSecondary ? <IconButton {...startSecondary} /> : secondaryStub}

      <div className={cx('main-section')}>
        <div className={cx('title', 'ellipsis')}>{title}</div>
        {Boolean(subtitle) && (
          <div className={cx('subtitle', 'ellipsis')}>
            {subtitle}
          </div>
        )}
      </div>

      {hasEndSecondary ? <IconButton {...endSecondary} /> : secondaryStub}
      {hasEnd ? <IconButton {...end} /> : stub}
    </div>
  );
};

/**
 * Компонент кнопки-иконки.
 * @param props Свойства. Поддерживаются свойства button.
 * @param props.icon Иконка.
 * @return Элемент.
 */
export const IconButton: React.FC<ButtonProps> = ({ icon, ...buttonProps }) => (
  <button {...buttonProps} type='button' className={cx('icon-button')}>
    {icon}
  </button>
);

const iconStub = (
  <div className={cx('icon-button')} />
);

export default TopBar;

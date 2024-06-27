import { type HTMLAttributes, type Ref } from 'react';
import { type WithTestId } from '../types';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandUp';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandDown';
import classNames from 'classnames/bind';
import styles from './menu-opener.m.scss';

export interface PhoneInputMenuOpenerProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  rootRef?: Ref<HTMLDivElement>;
  imageSrc?: string;
  visuallyOpen?: boolean;
  visuallyDisabled?: boolean;
}

const cx = classNames.bind(styles);

/**
 * Кнопка меню выбора маски ввода телефона.
 * @param props Свойства.
 * @return Элемент.
 */
export function PhoneInputMenuOpener({
  rootRef,
  visuallyOpen,
  visuallyDisabled,
  imageSrc,
  className,
  ...restProps
}: PhoneInputMenuOpenerProps) {
  const ArrowSVG = visuallyOpen ? UpSVG : DownSVG;

  return (
    <div
      data-testid='phone-input:menu-opener'
      {...restProps}
      ref={rootRef}
      className={cx('root', { disabled: visuallyDisabled }, className)}
    >
      <img alt='' width={24} height={24} src={imageSrc} />
      <ArrowSVG className={styles.arrow} />
    </div>
  );
}

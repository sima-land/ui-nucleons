import { Button } from '../button';
import { defineSlots } from '../helpers';
import { TextButton } from '../text-button';
import { SnackBarProps } from './types';
import styles from './snack-bar.m.scss';
import {
  SnackBarEndIcon,
  SnackBarImage,
  SnackBarStartIcon,
  SnackBarSubtitle,
  SnackBarTitle,
} from './slots';
import { useEffect, useRef } from 'react';
import cx from 'classnames';
import { useOutsideClick } from '../hooks';

/**
 * Компонент Snackbar.
 * @param props Параметры.
 * @return Элемент.
 */
export function SnackBar({
  onClick,
  children,
  onClose,
  className,
  onMount,
  showFor: openerRef = [],
  ...props
}: SnackBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { image, title, subtitle, startIcon, button, textButton, endIcon } = defineSlots(children, {
    image: SnackBarImage,
    startIcon: SnackBarStartIcon,
    title: SnackBarTitle,
    subtitle: SnackBarSubtitle,
    button: Button,
    textButton: TextButton,
    endIcon: SnackBarEndIcon,
  });

  useEffect(() => {
    onMount?.();
  }, []);

  useOutsideClick([ref, ...(Array.isArray(openerRef) ? openerRef : [openerRef])], onClose);

  return (
    <div
      className={cx(styles.root, styles.shown, className)}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {image || startIcon}
      {title && (
        <div className={styles.content}>
          {title}
          {subtitle}
        </div>
      )}
      {(button || textButton) && <div className={styles.button}>{button || textButton}</div>}
      {endIcon}
    </div>
  );
}

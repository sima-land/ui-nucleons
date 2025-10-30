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

/**
 * Компонент Snackbar.
 * @param props Параметры.
 * @return Элемент.
 */
export function SnackBar({ onClick, children, className, onMount, ...props }: SnackBarProps) {
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

  const asButtonProps = { tabIndex: props.tabIndex || 0, role: props.role || 'button' };

  const hasButton = Boolean(button || textButton);

  return (
    <div
      className={cx(styles.root, styles.shown, className)}
      onClick={!hasButton ? onClick : undefined}
      ref={ref}
      {...(!hasButton && asButtonProps)}
      {...props}
    >
      {image || startIcon}
      {title && (
        <div className={styles.content}>
          {title}
          {subtitle}
        </div>
      )}
      {hasButton && (
        <div onClick={onClick} className={styles.button} {...asButtonProps}>
          {button || textButton}
        </div>
      )}
      {endIcon}
    </div>
  );
}

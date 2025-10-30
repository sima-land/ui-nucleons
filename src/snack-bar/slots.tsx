import styles from './snack-bar.m.scss';
import { HTMLAttributes } from 'react';
import cn from 'classnames';
import { SnackBarIconProps, SnackBarImageProps } from './types';

/**
 * Компонент для вывода изображения в Snackbar.
 * @param props Параметры.
 * @return Элемент.
 */
export function SnackBarImage(props: SnackBarImageProps) {
  return (
    <div className={styles.image}>
      <img {...props} />
    </div>
  );
}

/**
 * Компонент для вывода иконки в Snackbar.
 * @param props Параметры.
 * @return Элемент.
 */
function Icon({ icon, onClick, className, ...props }: SnackBarIconProps) {
  return (
    <div
      className={cn(styles.icon, className)}
      onClick={
        onClick
          ? event => {
              event.stopPropagation();
              onClick(event);
            }
          : undefined
      }
      {...props}
    >
      {icon}
    </div>
  );
}

/**
 * Компонент для вывода иконки в начале контента Snackbar.
 * @param props Параметры.
 * @return Элемент.
 */
export const SnackBarStartIcon = (props: SnackBarIconProps) => <Icon {...props} />;

/**
 * Компонент для вывода иконки в конце контента Snackbar.
 * @param props Параметры.
 * @return Элемент.
 */
export const SnackBarEndIcon = (props: SnackBarIconProps) => <Icon {...props} />;

/**
 * Компонент для вывода заголовка в Snackbar.
 * @param props Параметры.
 * @return Элемент.
 */
export function SnackBarTitle({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(styles.title, className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Компонент для вывода подзаголовка в Snackbar.
 * @param props Параметры.
 * @return Элемент.
 */
export function SnackBarSubtitle({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(styles.subtitle, className)} {...props}>
      {children}
    </div>
  );
}

import React, { forwardRef } from 'react';
import { always, cond, eq, stubTrue } from 'lodash/fp';
import classnames from 'classnames/bind';
import classes from './button.module.scss';

export type ButtonSize = 's' | 'm';

export type ButtonViewType = 'primary' | 'secondary';

type IconPosition = 'start' | 'end';

type Appearance = 'button' | 'link' | 'container';

interface CustomProps<T extends Appearance = Appearance> {
  /** Определяет внешний вид кнопки. */
  viewType?: ButtonViewType;

  /** Определяет тип корневого элемента. */
  appearance?: T;

  /** Иконка. */
  icon?: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;

  /** Позиция иконки. */
  iconPosition?: IconPosition;

  /** Размер. */
  size?: ButtonSize;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

type ExcludeKeys<T> = Omit<T, 'ref' | keyof CustomProps>;

export type ButtonProps =
  | (CustomProps<'button'> & ExcludeKeys<JSX.IntrinsicElements['button']>)
  | (CustomProps<'link'> & ExcludeKeys<JSX.IntrinsicElements['a']>)
  | (CustomProps<'container'> & ExcludeKeys<JSX.IntrinsicElements['div']>);

const cx = classnames.bind(classes);

/**
 * Компонент кнопки, стилизованной по дизайн-гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export const Button = forwardRef<any, ButtonProps>(function Button(
  {
    children,
    className,
    viewType = 'primary',
    appearance = 'button',
    size = 'm',
    icon: Icon,
    iconPosition = 'start',
    'data-testid': testId = 'button',
    ...restProps
  },
  ref,
) {
  const [Element, moreProps] = resolveAppearance(appearance);

  const readyClassName = computeClassName({
    className,
    size,
    viewType,
    withIcon: Boolean(Icon),
    withContent: Boolean(children) && children !== 0,
    iconPosition,
  });

  return (
    <Element
      {...(restProps as any)}
      {...(moreProps as any)}
      data-testid={testId}
      ref={ref}
      className={readyClassName}
      children={
        <>
          {Icon && iconPosition === 'start' && (
            <Icon width={24} height={24} className={cx('icon', children && 'icon-start')} />
          )}
          {children}
          {Icon && iconPosition === 'end' && (
            <Icon width={24} height={24} className={cx('icon', children && 'icon-end')} />
          )}
        </>
      }
    />
  );
});

/**
 * Возвращает строку с классами для стилизации кнопки.
 * @param props Опции.
 * @param props.actionType Определяет внешний вид кнопки.
 * @param props.size Определяет размер.
 * @param props.iconPosition Положение иконки.
 * @param props.withIcon Показывать ли иконку.
 * @param props.withContent Есть ли контент.
 * @param props.className Дополнительный класс.
 * @return Строка с классами.
 */
export const computeClassName = ({
  size,
  viewType,
  iconPosition,
  withIcon,
  withContent,
  className,
}: {
  size: ButtonSize;
  viewType: ButtonViewType;
  iconPosition: IconPosition;
  withIcon: boolean;
  withContent: boolean;
  className?: string;
}) =>
  cx([
    className,
    'button-base',
    viewType === 'secondary' ? 'button-secondary' : 'button-primary',
    `button-${size}`,
    withContent && !withIcon && `text-button-${size}`,
    withContent && withIcon && `button-${size}-with-${iconPosition}-icon`,
  ]);

/**
 * Возвращает кортеж с именем элемента и свойствами компонента по ключу.
 * @param appearance Ключ.
 * @return Кортеж с именем элемента и свойствами.
 */
export const resolveAppearance = cond<
  'button' | 'link' | 'container',
  ['button' | 'div' | 'a', null | { role: 'button' }]
>([
  [eq('link'), always(['a', null])],
  [eq('container'), always(['div', { role: 'button' }])],
  [stubTrue, always(['button', null])],
]);

import React, { forwardRef } from 'react';
import classnames from 'classnames/bind';
import classes from './layout.module.scss';

type Breakpoint = 'mxs' | 'ms' | 'mm' | 'ml' | 'xs' | 's' | 'm' | 'l' | 'xl';

export interface Props extends React.HTMLAttributes<HTMLElement> {

  /** Тэг. */
  element?: string

  /** Список точек остановки на которых необходимо отключить ограничение ширины. */
  disabledOn?: Array<Breakpoint>
}

const cx = classnames.bind(classes);

/**
 * Возвращает созданный функциональный компонент, формирующий Layout.
 * @param specificClass Специальный класс.
 * @param displayName Отображаемое имя компонента.
 * @return Компонент.
 */
const createLayout = (specificClass: string, displayName: string) => {
  const Component = forwardRef<HTMLElement, Props>(({
    className,
    element: Element = 'div',
    disabledOn = [],
    ...restProps
  }, ref) => (
    <Element
      {...restProps as any}
      ref={ref}
      className={cx(
        'layout',
        specificClass,
        className,
        disabledOn.map(key => `disabled-${key}`)
      )}
    />
  ));

  Component.displayName = displayName;

  return Component;
};

const DesktopLayout = createLayout('desktop', 'DesktopLayout');

const MobileLayout = createLayout('mobile', 'MobileLayout');

export { DesktopLayout, MobileLayout };

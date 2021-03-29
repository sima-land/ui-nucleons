import React, { forwardRef } from 'react';
import classnames from 'classnames/bind';
import classes from './layout.scss';

type Breakpoint = 'mxs' | 'ms' | 'mm' | 'ml' | 'xs' | 's' | 'm' | 'l' | 'xl';

type Props = {
  element?: string
  disabledOn?: Array<Breakpoint>
} & React.HTMLAttributes<HTMLElement>;

const cx = classnames.bind(classes);

/**
 * Возвращает компонент формирующий Layout.
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

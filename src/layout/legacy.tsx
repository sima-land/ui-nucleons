import React, { forwardRef } from 'react';
import { LayoutProps } from './types';
import classnames from 'classnames/bind';
import classes from './legacy.module.scss';

const cx = classnames.bind(classes);

/**
 * Возвращает созданный функциональный компонент, формирующий Layout.
 * @param specificClass Специальный класс.
 * @param displayName Отображаемое имя компонента.
 * @return Элемент.
 */
const createLayout = (specificClass: string, displayName: string) => {
  const Component = forwardRef<HTMLElement, LayoutProps>(
    ({ className, element: Element = 'div', disabledOn = [], ...restProps }, ref) => (
      <Element
        {...(restProps as any)}
        ref={ref}
        className={cx(
          'layout',
          specificClass,
          className,
          disabledOn.map(key => `disabled-${key}`),
        )}
      />
    ),
  );

  Component.displayName = displayName;

  return Component;
};

/** @deprecated */
const DesktopLayout = createLayout('desktop', 'DesktopLayout');

/** @deprecated */
const MobileLayout = createLayout('mobile', 'MobileLayout');

export { DesktopLayout, MobileLayout };

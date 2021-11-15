import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import styles from './unknown-content.module.scss';
import { setTableRowLabels } from './utils';

export interface UnknownContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Строка с html-версткой. */
  markup?: string;

  /** Содержимое. */
  children?: React.ReactNode;
}

/**
 * Компонент, стилизующий верстку по гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export const UnknownContent = ({ markup, children, className }: UnknownContentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current && setTableRowLabels(ref.current);
  });

  return (
    <div
      ref={ref}
      className={classnames(styles.root, className)}
      {...(children ? { children } : { dangerouslySetInnerHTML: { __html: markup || '' } })}
    />
  );
};

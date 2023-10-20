import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { setTableRowLabels } from './utils';
import classnames from 'classnames';
import styles from './unknown-content.module.scss';

export interface UnknownContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Строка с html-версткой. */
  markup?: string;

  /** Содержимое. */
  children?: ReactNode;
}

/**
 * Компонент, стилизующий верстку по гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export function UnknownContent({ markup, children, className }: UnknownContentProps) {
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
}

import React from 'react';
import classnames from 'classnames';
import styles from './unknown-content.module.scss';

export interface UnknownContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Строка с html-версткой. */
  markup: string;
}

/**
 * Компонент, стилизующий верстку по гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export const UnknownContent = ({ markup, className }: UnknownContentProps) => (
  <div
    className={classnames(styles.root, className)}
    dangerouslySetInnerHTML={{ __html: markup }}
  />
);

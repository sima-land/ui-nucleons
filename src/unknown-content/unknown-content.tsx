import type { UnknownContentProps } from './types';
import { useEffect, useRef } from 'react';
import { setTableRowLabels } from './utils';
import classNames from 'classnames';
import styles from './unknown-content.m.scss';

/**
 * Блок, стилизующий содержимое по дизайн-гайдам.
 * @todo Переименовать в StyledMarkup?
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
      className={classNames(styles.root, className)}
      {...(children ? { children } : { dangerouslySetInnerHTML: { __html: markup || '' } })}
    />
  );
}

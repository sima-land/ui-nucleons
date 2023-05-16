import React, { Children, CSSProperties, HTMLAttributes, ReactNode, useRef } from 'react';
import { useItemsHide } from './utils';
import classNames from 'classnames';
import styles from './group-overflow.module.scss';

export type RenderTail = (data: { hiddenCount: number }) => ReactNode;

export interface GroupOverflowProps extends HTMLAttributes<HTMLDivElement> {
  /** Расстояние между элементами в пикселях. */
  gap?: number;

  /** Вернёт "замыкающий" элемент, который будет выведен по аналогии с многоточием для текста. */
  tail?: RenderTail;
}

/**
 * Группа со скрытием не влезающих элементов.
 * @param props Свойства.
 * @return Элемент.
 */
export function GroupOverflow({
  children,
  className,
  style,
  gap,
  tail,
  ...restProps
}: GroupOverflowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { state, start } = useItemsHide(ref, el => el.parentElement?.parentElement);
  const total = Children.count(children);

  return (
    <div
      className={classNames(styles.root, className)}
      style={gap ? ({ ...style, '--group-overflow-gap': `${gap}px` } as CSSProperties) : style}
      {...restProps}
    >
      <div ref={ref} className={styles.items}>
        {/* ВАЖНО: здесь всегда Children.toArray() тк иначе в Jest происходит размонтирование */}
        {state === 'initial'
          ? Children.toArray(children)
          : Children.toArray(children).slice(0, start)}
      </div>

      {state !== 'initial' && start < total && tail && (
        <div className={styles.more}>{tail({ hiddenCount: total - start })}</div>
      )}
    </div>
  );
}

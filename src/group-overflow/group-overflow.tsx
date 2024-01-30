import { Children, CSSProperties, useRef } from 'react';
import { useItemsHide } from './utils';
import { GroupOverflowProps } from './types';
import classNames from 'classnames';
import styles from './group-overflow.m.scss';

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
      style={
        typeof gap === 'number'
          ? ({ ...style, '--group-overflow-gap': `${gap}px` } as CSSProperties)
          : style
      }
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

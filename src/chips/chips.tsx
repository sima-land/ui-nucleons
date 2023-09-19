import { HTMLAttributes, ReactNode } from 'react';
import { ChipsItem } from './chips-item';
import classnames from 'classnames/bind';
import styles from './chips.module.scss';

export interface ChipsProps extends HTMLAttributes<HTMLDivElement> {
  /** Элементы списка. */
  children?: ReactNode;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const cx = classnames.bind(styles);

/**
 * Список "чипсов".
 * @deprecated Теперь можно использовать Chip из "@sima-land/ui-nucleons/chip".
 * @param props Свойства.
 * @return Элемент.
 */
export function Chips({
  children,
  className,
  'data-testid': testId = 'chips',
  ...restProps
}: ChipsProps) {
  return (
    <div {...restProps} className={cx('root', className)} data-testid={testId}>
      {children}
    </div>
  );
}

/**
 * @deprecated Следует использовать ChipsItem.
 */
Chips.Item = ChipsItem;

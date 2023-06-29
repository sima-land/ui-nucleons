import { Children, isValidElement } from 'react';
import { ChipsItem } from './item';
import classnames from 'classnames/bind';
import styles from './chips.module.scss';

export interface ChipsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Элементы списка. */
  children: React.ReactNode;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const cx = classnames.bind(styles);

/**
 * Список "чипсов".
 * @param props Свойства.
 * @return Элемент.
 */
export const Chips = ({
  children,
  className,
  'data-testid': testId = 'chips',
  ...restProps
}: ChipsProps) => (
  <div {...restProps} className={cx('list', className)} data-testid={testId}>
    {Children.toArray(children).filter(c => isValidElement(c) && c.type === ChipsItem)}
  </div>
);

Chips.Item = ChipsItem;

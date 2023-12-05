import type { DropdownItemProps } from './types';
import classNames from 'classnames/bind';
import styles from './dropdown-item.module.scss';

const cx = classNames.bind(styles);

/**
 * Элемент выпадающего списка.
 * @param props Свойства.
 * @todo Переименовать в MenuItem.
 * @return Элемент.
 */
export function DropdownItem({
  value,
  size = 'm',
  children,
  className,
  selected,
  disabled,
  noHover,
  checked,
  startContent,
  startIcon: StartIcon,
  endContent,
  endIcon: EndIcon,
  comment,
  dangerouslySetInnerHTML,
  'data-testid': testId = 'dropdown-item',
  ...restProps
}: DropdownItemProps) {
  const start = StartIcon ? <StartIcon className={cx('icon')} /> : startContent;
  const end = EndIcon ? <EndIcon className={cx('icon')} /> : endContent;

  const hasChildren = [start, children, end].some(item => typeof item !== 'undefined');

  return (
    <div
      {...(value !== undefined && { 'data-value': value })}
      {...restProps}
      className={cx(
        'root',
        `size-${size}`,
        selected && 'selected',
        checked && 'checked',
        disabled && 'disabled',
        noHover && 'no-hover',
        className,
      )}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      data-testid={testId}
    >
      {/*
        ВАЖНО: при hasChildren === false нужно выводить именно undefined чтобы не падала ошибка:
        Can only set one of `children` or `props.dangerouslySetInnerHTML`.
      */}
      {hasChildren ? (
        <>
          {start && <div className={cx('col', 'col-start')}>{start}</div>}

          <div className={cx('col', 'col-center')}>
            <div className={cx('row-main')}>{children}</div>
            {size === 'xl' && comment && <div className={cx('row-comment')}>{comment}</div>}
          </div>

          {end && <div className={cx('col', 'col-end')}>{end}</div>}
        </>
      ) : undefined}
    </div>
  );
}

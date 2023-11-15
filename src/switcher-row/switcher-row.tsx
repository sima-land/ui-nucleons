import type { SwitcherRowProps } from './types';
import { ReactNode } from 'react';
import { Checkbox } from '../checkbox';
import { defineSlots } from '../helpers/define-slots';
import { RadioButton } from '../radio-button';
import { Toggle } from '../toggle';
import classNames from 'classnames/bind';
import styles from './switcher-row.module.scss';

const cx = classNames.bind(styles);

/**
 * Блок вывода полей-переключателей (Checkbox, Toggle, RadioButton).
 * @param props Свойства.
 * @return Элемент.
 */
export function SwitcherRow({
  children,
  className,
  style,
  textAlign = 'left',
  fieldPosition = 'start',
  'data-testid': testId = 'switcher-row',
}: SwitcherRowProps) {
  const { toggle, checkbox, radio, label, comment } = defineSlots(children, {
    toggle: Toggle,
    checkbox: Checkbox,
    radio: RadioButton,
    label: SwitcherLabel,
    comment: SwitcherComment,
  });

  const input = toggle ?? checkbox ?? radio;
  const failed = input?.props.failed;
  const disabled = input?.props.disabled;
  const fieldId = input?.props.id;

  // @todo в Safari position: relative ломает vertical-align
  const fieldColumn = input && (
    <div className={cx('col', 'field-col', { 'toggle-col': toggle })}>{input}</div>
  );

  return (
    <div
      className={cx('root', `text-align-${textAlign}`, { failed, disabled }, className)}
      style={style}
      data-testid={testId}
    >
      {fieldPosition === 'start' && fieldColumn}

      <label className={cx('col', 'main-col')} htmlFor={fieldId}>
        {label && (
          <span className={cx('label', { 'for-toggle': toggle })} data-testid='switcher-row:label'>
            {label}
          </span>
        )}

        {comment && (
          <span className={cx('comment')} data-testid='switcher-row:comment'>
            {comment}
          </span>
        )}
      </label>

      {fieldPosition === 'end' && fieldColumn}
    </div>
  );
}

/**
 * Слот ярлыка.
 * @param props Свойства.
 * @return Элемент.
 */
function SwitcherLabel({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

/**
 * Слот комментария.
 * @param props Свойства.
 * @return Элемент.
 */
function SwitcherComment({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

SwitcherRow.Label = SwitcherLabel;
SwitcherRow.Comment = SwitcherComment;

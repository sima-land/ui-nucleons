import React, { CSSProperties, ReactNode } from 'react';
import { Checkbox } from '../checkbox';
import { defineSlots } from '../helpers/define-slots';
import { RadioButton } from '../radio-button';
import { Toggle } from '../toggle';
import classNames from 'classnames/bind';
import styles from './switcher-row.module.scss';

export interface SwitcherRowProps {
  /** Содержимое. */
  children?: ReactNode;

  /** Направление текста. */
  textAlign?: 'left' | 'right';

  /** Состояние с ошибками валидации. */
  failed?: boolean;

  /** Стили корневого элемента. */
  style?: CSSProperties;

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Позиция поля. */
  fieldPosition?: 'start' | 'end';

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

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
  failed,
  textAlign,
  fieldPosition = 'start',
  'data-testid': testId = 'switcher-row',
}: SwitcherRowProps) {
  const { toggle, checkbox, radio, label, comment } = defineSlots(children, {
    toggle: Toggle,
    checkbox: Checkbox,
    radio: RadioButton,
    label: SwitcherRowLabel,
    comment: SwitcherRowComment,
  });

  const input = toggle ?? checkbox ?? radio;
  const disabled = input?.props.disabled;
  const fieldId = input?.props.id;
  const fieldColumn = input && <div className={cx('col', 'field-col')}>{input}</div>;

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
function SwitcherRowLabel({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

/**
 * Слот комментария.
 * @param props Свойства.
 * @return Элемент.
 */
function SwitcherRowComment({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

SwitcherRow.Label = SwitcherRowLabel;
SwitcherRow.Comment = SwitcherRowComment;

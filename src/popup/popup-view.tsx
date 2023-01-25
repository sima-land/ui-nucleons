import React, { HTMLAttributes, Ref } from 'react';
import { WithTestId } from '../types';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/cross';
import classNames from 'classnames/bind';
import styles from './popup-view.module.scss';

export interface PopupViewProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Сработает при клике на крестик. */
  onClose?: () => void;

  /** Реф корневого элемента. */
  popupRef?: Ref<HTMLDivElement>;
}

const cx = classNames.bind(styles);

/**
 * Popup.
 * @param props Свойства.
 * @return Элемент.
 */
export function PopupView({
  children,
  onClose,
  popupRef,
  className,
  'data-testid': testId = 'popup',
  ...rest
}: PopupViewProps) {
  return (
    <div {...rest} className={cx('root', className)} ref={popupRef} data-testid={testId}>
      {onClose && (
        <button
          aria-label='Закрыть'
          className={cx('close')}
          onClick={onClose}
          data-testid='popup:close'
        >
          <CrossSVG />
        </button>
      )}

      {/* ВАЖНО: используем внутренний элемент для стилизации полосы прокрутки по гайдам */}
      {/* @todo добавить возможность обрабатывать прокрутку при необходимости */}
      <div className={cx('content')}>{children}</div>
    </div>
  );
}

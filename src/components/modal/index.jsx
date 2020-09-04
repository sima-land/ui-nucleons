import React, { useEffect, useRef } from 'react';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';
import Popup from '../popups/popup';
import Icon from '../icon';
import TopBar from '../top-bar';
import composeClasses from '../helpers/compose-classes';
import { useCloseHandler } from './utils';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './modal.scss';
import crossIcon from '../icons/cross.svg';
import bigCrossIcon from '../icons/cross-big.svg';

const cx = classnames.bind(styles);

const CLASSES_PRESETS = {
  default: {
    overlay: cx('overlay-default'),
    modal: cx('modal-default'),
    close: cx('close-default'),
  },
  extended: {
    overlay: cx('overlay-extended'),
    modal: cx('modal-extended'),
  },
};

/**
 * Компонент модального окна.
 * @param {Object} props Свойства компонента.
 * @param {boolean} [props.extended=false] Нужно ли выводить новый дизайн модального окна.
 * @param {boolean} [props.withScrollDisable] Нужно ли блокировать прокрутку body при показе.
 * @param {Object} [props.scrollDisableOptions] Опции для disableBodyScroll.
 * @param {string} [props.title] Заголовок (только при extended=true).
 * @param {string} [props.subtitle] Подзаголовок (только при extended=true).
 * @param {Object} [props.topBarProps] Свойства TopBar (только при extended=true).
 * @param {boolean} [props.withDivideTopBar=false] Нужно ли отделять TopBar чертой (только при extended=true).
 * @param {boolean} [props.withDivideFooter=true] Нужно ли отделять footer чертой (только при extended=true).
 * @param {*} [props.footer] Содержимое футера (только при extended=true).
 * @param {*} props.children Содержимое компонента.
 * @param {Function} props.onClose Функция, вызываемая при закрытии модального окна.
 * @param {number} [props.closeButtonSize] Размер закрывающей кнопки. Указывается если нужна кнопка.
 * @param {Object} [props.customClasses] Пользовательские классы.
 * @param {string} [props.customClasses.overlay] Классы затемнения.
 * @param {string} [props.customClasses.modal] Классы модального окна.
 * @param {string} [props.customClasses.close] Классы закрывающей кнопки.
 * @param {boolean} [props.withCloseButton=Number.isFinite(closeButtonSize)] Нужно ли выводить крестик.
 * @return {ReactElement} Компонент модального окна.
 */
const Modal = ({
  extended = false,
  withScrollDisable = extended,
  scrollDisableOptions = { reserveScrollBarGap: true },
  title,
  subtitle,
  topBarProps = {},
  withDivideTopBar = false,
  withDivideFooter = true,
  footer,
  children,
  onClose,
  closeButtonSize,
  withCloseButton = Number.isFinite(closeButtonSize),
  customClasses = {},
}) => {
  const rootRef = useRef();

  const readyClasses = composeClasses({
    defaultClasses: CLASSES_PRESETS[extended ? 'extended' : 'default'],
    customClasses,
  });

  useEffect(() => {
    withScrollDisable
      && rootRef.current
      && disableBodyScroll(rootRef.current, scrollDisableOptions);

    return () => {
      withScrollDisable
        && rootRef.current
        && enableBodyScroll(rootRef.current);
    };
  }, [withScrollDisable]);

  return (
    <div ref={rootRef} {...useCloseHandler(onClose)} className={readyClasses.overlay}>
      <Popup additionalClass={readyClasses.modal}>
        {Boolean(extended) && (
          <TopBar
            className={cx('header', withDivideTopBar && 'divided')}
            title={title}
            subtitle={subtitle}
            buttonsProps={{
              end: {
                onClick: onClose,
                icon: withCloseButton
                  ? (
                    <Icon
                      icon={bigCrossIcon}
                      size={24}
                      className={cx('cursor-pointer')}
                    />
                  )
                  : null,
              },
            }}
            {...topBarProps}
          />
        )}
        {!extended && Boolean(withCloseButton) && (
          <Icon
            size={closeButtonSize}
            icon={crossIcon}
            className={readyClasses.close}
            onClick={onClose}
          />
        )}
        {children}
        {Boolean(extended && footer) && (
          <div className={cx('footer', withDivideFooter && 'divided')}>
            {footer}
          </div>
        )}
      </Popup>
    </div>
  );
};

Modal.propTypes = {
  /**
   * Нужно ли выводить новый дизайн модального окна.
   */
  extended: PropTypes.bool,

  /**
   * Нужно ли блокировать прокрутку body при показе.
   */
  withScrollDisable: PropTypes.bool,

  /**
   * Опции для disableBodyScroll.
   */
  scrollDisableOptions: PropTypes.object,

  /**
   * Заголовок (только при extended=true).
   */
  title: PropTypes.string,

  /**
   * Подзаголовок (только при extended=true).
   */
  subtitle: PropTypes.string,

  /**
   * Свойства TopBar (только при extended=true).
   */
  topBarProps: PropTypes.object,

  /**
   * Нужно ли отделять TopBar чертой (только при extended=true).
   */
  withDivideTopBar: PropTypes.bool,

  /**
   * Нужно ли отделять footer чертой (только при extended=true).
   */
  withDivideFooter: PropTypes.bool,

  /**
   * Содержимое футера (только при extended=true).
   */
  footer: PropTypes.any,

  /**
   * Содержимое компонента.
   */
  children: PropTypes.any,

  /**
   * Функция, вызываемая при закрытии модального окна.
   */
  onClose: PropTypes.func,

  /**
   * Размер закрывающей кнопки. Указывается если нужна кнопка.
   */
  closeButtonSize: PropTypes.number,

  /**
   * Пользовательские классы.
   */
  customClasses: PropTypes.shape({
    /**
     * Классы затемнения.
     */
    overlay: PropTypes.string,

    /**
     * Классы модального окна.
     */
    modal: PropTypes.string,

    /**
     * Классы закрывающей кнопки.
     */
    close: PropTypes.string,
  }),

  /**
   * Нужно ли выводить крестик.
   */
  withCloseButton: PropTypes.bool,
};

export default Modal;

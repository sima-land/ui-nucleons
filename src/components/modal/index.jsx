import React, { useRef } from 'react';
import styles from './modal.scss';
import Popup from '../popups/popup/';
import Icon from '../icon/';
import { cross } from '../icons';
import composeClasses from '../helpers/compose-classes';
import Type from 'prop-types';
import isFunction from 'lodash/isFunction';

const DEFAULT_CLASSES = {
  overlay: styles.overlay,
  modal: styles.modal,
  close: styles.close,
};

/**
 * Компонент модального окна.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Содержимое компонента.
 * @param {Function} props.onClose Функция, вызываемая при закрытии модального окна.
 * @param {number} [props.closeButtonSize] Размер закрывающей кнопки. Указывается если нужна кнопка.
 * @param {Object} [props.customClasses] Пользовательские классы.
 * @param {string} [props.customClasses.overlay] Классы затемнения.
 * @param {string} [props.customClasses.modal] Классы модального окна.
 * @param {string} [props.customClasses.close] Классы закрывающей кнопки.
 * @return {ReactElement} Компонент модального окна.
 */
const Modal = ({ children, onClose, closeButtonSize, customClasses = {} }) => {
  const newClasses = composeClasses({ defaultClasses: DEFAULT_CLASSES, customClasses });
  const { overlay: overlayClasses, modal: modalClasses, close: closeClasses } = newClasses;

  const mouseDownTarget = useRef();

  /**
   * Обработчик нажатия кнопки мыши.
   * @param {Object} event Объект события.
   */
  const handleMouseDown = ({ button, target }) => {
    if (button === 0) { mouseDownTarget.current = target; }
  };

  /**
   * Обработчик отпускания кнопки мыши.
   * @param {Object} event Объект события.
   */
  const handleMouseUp = ({ target, currentTarget, button }) => {
    isFunction(onClose)
    && button === 0
    && target === currentTarget
    && currentTarget === mouseDownTarget.current
    && onClose();
  };

  return (
    <div
      className={overlayClasses}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Popup additionalClass={modalClasses}>
        {Number.isFinite(closeButtonSize) && (
          <Icon
            size={closeButtonSize}
            icon={cross}
            className={closeClasses}
            onClick={onClose}
          />
        )}
        {children}
      </Popup>
    </div>
  );
};

Modal.propTypes = {
  /**
   * Содержимое компонента.
   */
  children: Type.any,

  /**
   * Функция, вызываемая при закрытии модального окна.
   */
  onClose: Type.func,

  /**
   * Размер закрывающей кнопки. Указывается если нужна кнопка.
   */
  closeButtonSize: Type.number,

  /**
   * Пользовательские классы.
   */
  customClasses: Type.shape({
    /**
     * Классы затемнения.
     */
    overlay: Type.string,

    /**
     * Классы модального окна.
     */
    modal: Type.string,

    /**
     * Классы закрывающей кнопки.
     */
    close: Type.string,
  }),
};

export default Modal;

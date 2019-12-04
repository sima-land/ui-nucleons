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
 * @param {number} [props.closeButtonSize] Размер закрывающей кнопки. Указыввается если нужна кнопка.
 * @param {Object} [props.customClasses] Пользовательские классы.
 * @param {string} [customClasses.overlay] Классы затемнения.
 * @param {string} [customClasses.modal] Классы модального окна.
 * @param {string} [customClasses.close] Классы закрывающей кнопки.
 * @return {ReactComponent} Компонент модального окна.
 */
const Modal = ({ children, onClose, closeButtonSize, customClasses = {} }) => {
  const newClasses = composeClasses({ defaultClasses: DEFAULT_CLASSES, customClasses });
  const { overlay: overlayClasses, modal: modalClasses, close: closeClasses } = newClasses;
  const buttonSize = typeof closeButtonSize === 'number' && closeButtonSize;

  const previousTarget = useRef();

  /**
   * Обработчик нажатия кнопки мыши.
   * @param {Object} event Объект события.
   */
  const handleMouseDown = ({ button, target }) => {
    if (button === 0) { previousTarget.current = target; }
  };

  /**
   * Обработчик отпускания кнопки мыши.
   * @param {Object} event Объект события.
   */
  const handleMouseUp = ({ target, currentTarget, button }) => {
    isFunction(onClose)
    && button === 0
    && target === currentTarget
    && currentTarget === previousTarget.current
    && onClose();
  };
  return (
    <div
      className={overlayClasses}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Popup additionalClass={modalClasses}>
        {closeButtonSize && <Icon size={buttonSize} icon={cross} className={closeClasses} onClick={onClose} />}
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
   * Размер закрывающей кнопки. Указыввается если нужна кнопка.
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

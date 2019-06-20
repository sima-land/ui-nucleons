import React from 'react';
import './modal.scss';
import Popup from '../popups/popup/';
import composeClasses from '../helpers/compose-classes';
import Type from 'prop-types';

const DEFAULT_CLASSES = {
  overlay: 'overlay',
  modal: 'modal',
  close: 'close',
};

/**
 * Компонент модального окна.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Содержимое компонента.
 * @param {Function} [props.onClose] Функция, вызываемая при закрытии попапа.
 * @param {boolean} [props.withCloseButton] С закрывающей кнопкой.
 * @param {Object} [props.customClasses] Пользовательские классы.
 * @param {string} [customClasses.overlay] Классы затемнения.
 * @param {string} [customClasses.modal] Классы модального окна.
 * @param {string} [customClasses.close] Классы закрывающей кнопки.
 * @return {ReactElement} Компонент модального окна.
 */
const Modal = ({ children, onClose, withCloseButton, customClasses = {} }) => {
  const newClasses = composeClasses({ defaultClasses: DEFAULT_CLASSES, customClasses });
  const { overlay: overlayClasses, modal: modalClasses, close: closeClasses } = newClasses;
  return (
    <div
      className={overlayClasses}
      onClick={event => typeof onClose === 'function' && event.target === event.currentTarget && onClose()}
    >
      <Popup className={modalClasses}>
        {withCloseButton && <div className={closeClasses} onClick={onClose}>×</div>}
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
   * Функция, вызываемая при закрытии попапа.
   */
  onClose: Type.func,
  /**
   * С закрывающей кнопкой.
   */
  withCloseButton: Type.bool,
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

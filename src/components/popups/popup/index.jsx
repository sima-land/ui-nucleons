import React, { forwardRef } from 'react';
import styles from './popup.scss';
import classNames from 'classnames';
import Type from 'prop-types';

/**
 * Попап. Базовый вид.
 * @param {Object} props Свойства компонента.
 * @param {*} [props.children] Дочерние элементы.
 * @param {string} [props.additionalClass] Дополнительный класс попапа.
 * @param {Object} ref Реф для DOM-элемента попапа.
 * @return {ReactElement} Попап со скругленными углами, белым фоном и тенью.
 */
const Popup = forwardRef(function Popup ({ children, additionalClass }, ref) {
  return (
    <div ref={ref} className={classNames(styles.popup, additionalClass)}>
      {children}
    </div>
  );
});

Popup.propTypes = {
  /**
   * Дочерние элементы попапа.
   */
  children: Type.any,

  /**
   * Дополнительный класс.
   */
  additionalClass: Type.string,
};

Popup.displayName = 'Popup';
export default Popup;

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
const Popup = forwardRef(({ children, additionalClass }, ref) => (
  <div ref={ref} className={classNames(styles.popup, additionalClass)}>
    {children}
  </div>
));

Popup.displayName = 'Popup';

Popup.propTypes = {
  /**
   * Дочерние элементы попапа
   */
  children: Type.any,
  /**
   * Дополнительный класс
   */
  additionalClass: Type.string,
  /**
   * Реф для DOM-элемента попапа
   */
  ref: Type.oneOfType([
    Type.func,
    Type.shape({ current: Type.instanceOf(Element) }),
  ]),
};

export default Popup;

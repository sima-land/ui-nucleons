import React from 'react';
import './popup.scss';
import classNames from 'classnames';
import Type from 'prop-types';

/**
 * Попап. Базовый вид.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Дочерние элементы.
 * @param {string} props.additionalClass Дополнительный класс попапа.
 * @param {Function} props.saveRef Функция сохранения ссылки на HTML элемент.
 * @return {ReactElement} Попап со скругленными углами, белым фоном и тенью.
 */
const Popup = ({ children, additionalClass, saveRef }) => (
  <div ref={saveRef} className={classNames('popup', additionalClass)}>
    {children}
  </div>
);

Popup.propTypes = {
  children: Type.any,
  additionalClass: Type.string,
  saveRef: Type.func,
};

export default Popup;

